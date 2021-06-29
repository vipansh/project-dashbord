import React, { useContext, useState } from "react";
import { ID } from "../utils/randomId";

const FormContext = React.createContext();

export function useForm() {
  return useContext(FormContext);
}
// const componentsTamp = {
//   id: "component" + ID(),
//   discription: "",
//   quantity: "",
//   rate: "",
//   unit: "",
//   material: [],
//   workVendor: [
//     {
//       id: "work" + ID(),
//       workType: "",
//       category: "",
//       heading: "",
//       dicription: "",
//       quantity: "",
//       rate: "",
//       unit: "",
//       milestones: [],
//     },
//   ],
// };
// const tamplet = {
//   id: ID(),
//   title: "",
//   components: [],
// };

const roomTemp = [
  {
    id: 1,
    title: "Room 1",
    data: [
      {
        id: ID(),
        title: "",
        components: [],
      },
    ],
  },
  {
    id: 2,
    title: "Room 2",
    data: [
      {
        id: ID(),
        title: "",
        components: [],
      },
    ],
  },
  {
    id: 3,
    title: "Room 3",
    data: [
      {
        id: ID(),
        title: "",
        components: [],
      },
    ],
  },
];

export function FormProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [activeRoomNo, setActiveRoomNo] = useState();
  const [activeUnit, setActiveUnit] = useState();
  const [activeComponent, setActiveComponent] = useState();
  const [activeVendor, setActiveVendor] = useState();
  const [formData, setFormData] = useState(() => {
    setLoading(false);
    let localData = localStorage.getItem("formData");
    if (localData) return JSON.parse(localData);
    return roomTemp;
  });

  function saveToLocalStorage() {
    localStorage.setItem("formData", JSON.stringify(formData));
  }
  function addOneRoomUnit(id) {
    setLoading(true);
    let tempClone = [...formData];

    tempClone[id].data = [
      ...tempClone[id].data,
      {
        id: "room" + ID(),
        title: "",
        components: [],
      },
    ];
    setFormData(tempClone);
    setLoading(false);
  }

  function removeOneRoomUnit(formPosition, unitIndex) {
    setLoading(true);
    let tempClone = [...formData];
    // formData in ana array with three objects form Position helps to know the index of room
    tempClone[formPosition].data.splice(unitIndex, 1);
    setActiveRoomNo(-1);
    setActiveUnit(-1);
    setActiveComponent(-1);
    setActiveVendor(-1);
    setLoading(false);
    setFormData(tempClone);
  }

  function inputValuesForRoom(formPosition, roomIndex, title) {
    setLoading(true);
    let tempClone = [...formData];
    //Update object's titel property of rooom at index formPosition.
    tempClone[formPosition].data[roomIndex].title = title;
    setFormData(tempClone);
    setLoading(false);
  }

  function addComponent(formPosition, roomIndex) {
    setLoading(true);
    let tempClone = [...formData];
    // add one componet at the end of object's components property.
    tempClone[formPosition].data[roomIndex].components = [
      ...tempClone[formPosition].data[roomIndex].components,
      {
        id: "component" + ID(),
        discription: "",
        quantity: "",
        rate: "",
        unit: "",
        workVendor: [],
        material: [],
      },
    ];
    setFormData(tempClone);
    setLoading(false);
  }

  function removeComponent(formPosition, roomIndex, componentIndex) {
    setLoading(true);
    let tempClone = [...formData];
    tempClone[formPosition].data[roomIndex].components.splice(
      componentIndex,
      1
    );
    setActiveComponent(-1);
    setActiveVendor(-1);
    setFormData(tempClone);
    setLoading(false);
  }

  function addValueToComponent(e, formPosition, roomIndex, componentIndex) {
    let tempClone = [...formData];
    // updating component values at index componentIndex
    tempClone[formPosition].data[roomIndex].components[componentIndex] = {
      ...tempClone[formPosition].data[roomIndex].components[componentIndex],
      [e.target.name]: e.target.value,
    };
    setFormData(tempClone);
  }

  function addVendorToComponent(formPosition, roomIndex, componentIndex) {
    setLoading(true);
    let tempClone = [...formData];
    // updating component values at index componentIndex
    tempClone[formPosition].data[roomIndex].components[
      componentIndex
    ].workVendor = [
      ...tempClone[formPosition].data[roomIndex].components[componentIndex]
        .workVendor,
      {
        id: "work" + ID(),
        workType: "",
        category: "",
        heading: "",
        discription: "",
        quantity: "",
        rate: "",
        unit: "",
        milestones: [],
      },
    ];
    setFormData(tempClone);
    setLoading(false);
  }
  function addMaterialsToComponent(formPosition, roomIndex, componentIndex) {
    setLoading(true);
    let tempClone = [...formData];
    tempClone[formPosition].data[roomIndex].components[
      componentIndex
    ].material = [
      ...tempClone[formPosition].data[roomIndex].components[componentIndex]
        .material,
      {
        item: "",
        specification: "",
        quantity: "",
        rate: "",
      },
    ];
    setFormData(tempClone);
    setLoading(false);
  }

  function removeMaterialfromCOmponent(
    formPosition,
    roomIndex,
    componentIndex,
    materialIndex
  ) {
    setLoading(true);
    let tempClone = [...formData];
    tempClone[formPosition].data[roomIndex].components[
      componentIndex
    ].material.splice(materialIndex, 1);
    setFormData(tempClone);
    setLoading(false);
  }

  function addValueToVendorWork(
    e,
    formPosition,
    roomIndex,
    componentIndex,
    vendorIndex
  ) {
    let tempClone = [...formData];
    tempClone[formPosition].data[roomIndex].components[
      componentIndex
    ].workVendor[vendorIndex] = {
      ...tempClone[formPosition].data[roomIndex].components[componentIndex]
        .workVendor[vendorIndex],
      [e.target.name]: e.target.value,
    };
    setFormData(tempClone);
  }
  function removeVendorFromComponent(
    formPosition,
    roomIndex,
    componentIndex,
    vendorIndex
  ) {
    let tempClone = [...formData];
    tempClone[formPosition].data[roomIndex].components[
      componentIndex
    ].workVendor.splice(vendorIndex, 1);
    setActiveVendor(-1);
    setFormData(tempClone);
  }
  function addValueToMaterialInVendor(
    e,
    formPosition,
    roomIndex,
    componentIndex,
    materialIndex
  ) {
    let tempClone = [...formData];
    tempClone[formPosition].data[roomIndex].components[componentIndex].material[
      materialIndex
    ] = {
      ...tempClone[formPosition].data[roomIndex].components[componentIndex]
        .material[materialIndex],
      [e.target.name]: e.target.value,
    };
    setFormData(tempClone);
  }

  function addMileStone(formPosition, roomIndex, componentIndex, vendorIndex) {
    setLoading(true);
    let tempClone = [...formData];
    tempClone[formPosition].data[roomIndex].components[
      componentIndex
    ].workVendor[vendorIndex].milestones = [
      ...tempClone[formPosition].data[roomIndex].components[componentIndex]
        .workVendor[vendorIndex].milestones,
      {
        milestone: "",
        percentage: "",
      },
    ];
    setFormData(tempClone);
    setLoading(false);
  }

  function removeMileStone(
    formPosition,
    roomIndex,
    componentIndex,
    vendorIndex,
    mileStoneIndex
  ) {
    setLoading(true);
    let tempClone = [...formData];
    tempClone[formPosition].data[roomIndex].components[
      componentIndex
    ].workVendor[vendorIndex].milestones.splice(mileStoneIndex, 1);
    setFormData(tempClone);
    setLoading(false);
  }

  function addValueToMileStone(
    e,
    formPosition,
    roomIndex,
    componentIndex,
    vendorIndex,
    mileStoneIndex
  ) {
    setLoading(true);
    let tempClone = [...formData];
    tempClone[formPosition].data[roomIndex].components[
      componentIndex
    ].workVendor[vendorIndex].milestones[mileStoneIndex] = {
      ...tempClone[formPosition].data[roomIndex].components[componentIndex]
        .workVendor[vendorIndex].milestones[mileStoneIndex],
      [e.target.name]: e.target.value,
    };
    setFormData(tempClone);
    setLoading(false);
  }

  function openComponentBox(roomIndex, unitId) {
    // keep a record of active room index and unit index
    setActiveRoomNo(roomIndex);
    setActiveUnit(unitId);
    setActiveComponent(-1);
    setActiveVendor(-1);
  }

  function openVendor(componentId) {
    // pass the component id of which we want to open Vendor
    setActiveComponent(componentId);
    setActiveVendor(-1);
  }

  function openMileStone(vendorId) {
    setActiveVendor(vendorId);
  }

  const value = {
    activeRoomNo,
    activeUnit,
    activeComponent,
    activeVendor,
    formData,
    addOneRoomUnit,
    removeOneRoomUnit,
    inputValuesForRoom,
    addComponent,
    removeComponent,
    removeVendorFromComponent,
    addValueToComponent,
    openComponentBox,
    openVendor,
    openMileStone,
    addVendorToComponent,
    addValueToVendorWork,
    addValueToMaterialInVendor,
    addMaterialsToComponent,
    addMileStone,
    removeMileStone,
    removeMaterialfromCOmponent,
    addValueToMileStone,
    saveToLocalStorage,
  };
  if (loading) {
    return <div>loading....</div>;
  }
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

import React, { useState } from "react";
import { useForm } from "../../context/FormContext";
import AddUnit from "../AddUnit";
import MaterialSide from "./MaterialSide";
import WorkSide from "./WorkSide";

const SingleVendorCard = () => {
  const [side, setSide] = useState(0);
  const {
    activeRoomNo,
    activeUnit,
    activeComponent,
    formData,
    addVendorToComponent,
    addMaterialsToComponent,
  } = useForm();

  const addOneVendor = () =>
    addVendorToComponent(activeRoomNo, activeUnit, activeComponent);

  const addOneMaterial = () =>
    addMaterialsToComponent(activeRoomNo, activeUnit, activeComponent);

  return (
    <div>
      <div className="flex justify-around">
        <div
          className={`cursor-pointer inline-flex justify-center items-center ${side?"text-gray-300":"text-gray-700"}`}
          onClick={() => {
            setSide(0);
          }}
        >
          Work
        </div>
        <div
          className={`cursor-pointer inline-flex justify-center items-center ${side?"text-gray-700":"text-gray-300"}`}
          onClick={() => {
            setSide(1);
          }}
        >
          Material
        </div>
      </div>
      <div>
        {side
          ? formData[activeRoomNo].data[activeUnit].components[
              activeComponent
            ].material.map((data, index) => {
              return <MaterialSide  key={data.id} data={data} materialIndex={index} />;
            })
          : formData[activeRoomNo].data[activeUnit].components[
              activeComponent
            ].workVendor.map((data, index) => {
              return <WorkSide key={data.id} data={data} workIndex={index} />;
            })}
      </div>

      <AddUnit addOneFunction={side ? addOneMaterial : addOneVendor} />
    </div>
  );
};

export default SingleVendorCard;

import React from "react";
import { useForm } from "../../context/FormContext";
import AboutDiscriptionBoxes from "../AboutDiscriptionBoxes";

const ComponentData = ({ data, componentIndex }) => {
  const {
    addValueToComponent,
    activeRoomNo,
    activeUnit,
    openVendor,
    removeComponent,
  } = useForm();
  const updatecomponentValues = (e) => {
    addValueToComponent(e, activeRoomNo, activeUnit, componentIndex);
  };
  return (
    <div className="mt-8">
      <div className="fancy relative text-gray-400 ">
        <span>Component-{componentIndex + 1}</span>
        <div
          onClick={() => {
            removeComponent(activeRoomNo, activeUnit, componentIndex);
          }}
          className=" inline-flex  absolute text-center text-blueGray-300  bg-transparent rounded  items-center  w-auto right-0 cursor-pointer -mt-2 ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-flex items-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <AboutDiscriptionBoxes
        data={data}
        onChangeFunction={updatecomponentValues}
      />
      <div className="flex justify-between my-2">
        ₹ {data.quantity * data.rate}
        <button
          onClick={() => openVendor(componentIndex)}
          className="text-blue-500"
        >
          add Vendors/Material
        </button>
      </div>
    </div>
  );
};

export default ComponentData;

import React from "react";
import { useForm } from "../../context/FormContext";
import AddUnit from "../AddUnit";
import ComponentData from "./ComponentData";

const SingleComponent = () => {
  // This will have component data which will have AboutDiscription to updae values of component

  const { formData, activeRoomNo, activeUnit, addComponent } = useForm();
  const addOneComponent = () => addComponent(activeRoomNo, activeUnit);
  return (
    <div>
      <div className=" text-2xl flex justify-center items-center  mb-8">
        {formData[activeRoomNo].data[activeUnit].title} - Add Components
      </div>

      <div className="flex justify-between">
        <div>Uplode Drawing/3D</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        </div>
      </div>
      {formData[activeRoomNo].data[activeUnit].components.map((data, i) => {
        return <ComponentData data={data} key={data.id} componentIndex={i} />;
      })}
      <AddUnit addOneFunction={addOneComponent} />
    </div>
  );
};

export default SingleComponent;

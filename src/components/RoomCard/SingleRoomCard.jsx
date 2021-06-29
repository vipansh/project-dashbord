import React from "react";
import { useForm } from "../../context/FormContext";
import AddUnit from "../AddUnit";

const SingleRoomCard = ({ formIndex }) => {
  const {
    formData,
    inputValuesForRoom,
    addOneRoomUnit,
    openComponentBox,
    removeOneRoomUnit,
  } = useForm();

  const addOneUnit = () => addOneRoomUnit(formIndex);
  return (
    <div>
      {formData[formIndex].title}
      {formData[formIndex].data.map((unit, i) => {
        return (
          <div key={unit.id} className="my-2">
            <div className="relative flex w-full flex-wrap items-stretch my-3">
              <input
                type="text"
                onChange={(e) => {
                  inputValuesForRoom(formIndex, i, e.target.value);
                }}
                value={unit.title}
                placeholder="Placeholder"
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
              />
              <span
                onClick={() => removeOneRoomUnit(formIndex, i)}
                className="cursor-pointer z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 abslute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline text-gray-600 hover:text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </span>
            </div>

            <div className="flex justify-end items-center text-blue-500 my-2">
              <div
                onClick={() => openComponentBox(formIndex, i)}
                className="cursor-pointer"
              >
                Add Component(s)
              </div>
            </div>
          </div>
        );
      })}
      <AddUnit addOneFunction={addOneUnit} />
    </div>
  );
};

export default SingleRoomCard;

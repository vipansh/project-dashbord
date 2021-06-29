import React from "react";
import { useForm } from "../../context/FormContext";
import AboutDiscriptionBoxes from "../AboutDiscriptionBoxes";

const WorkSide = ({ data, workIndex }) => {
  const {
    addValueToVendorWork,
    activeRoomNo,
    activeUnit,
    activeComponent,
    openMileStone,
    removeVendorFromComponent,
  } = useForm();
  const updateWorkValues = (e) =>
    addValueToVendorWork(
      e,
      activeRoomNo,
      activeUnit,
      activeComponent,
      workIndex
    );
  return (
    <div className="my-4">
      <div className="fancy relative text-gray-400 my-4">
        <span>Vendor {workIndex + 1}</span>
        <div
          onClick={() => {
            removeVendorFromComponent(
              activeRoomNo,
              activeUnit,
              activeComponent,
              workIndex
            );
          }}
          className=" inline-flex  absolute text-center text-blueGray-300  bg-transparent rounded  items-top  w-auto right-0 cursor-pointer -mt-2 "
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
      <div className="flex justify-between my-2">
        <div className="font-bold">WorkType</div>
        <div className="border-2 rounded px-2 py-1 cursor-pointer">
          OnlyWork{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex justify-between my-2">
        <div className="font-bold">Vandor Category</div>
        <div className="border-2 rounded px-2 py-1 cursor-pointer">
          Carpenter{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <input
          type="text"
          name="heading"
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
          onChange={(e) => updateWorkValues(e)}
          value={data.heading}
          placeholder="Heading"
        />
        <AboutDiscriptionBoxes
          data={data}
          onChangeFunction={updateWorkValues}
        />
        <div className="flex justify-between my-2">
          <div>Rs-{data.quantity * data.rate}</div>
          <div
            className=" cursor-pointer text-blue-500"
            onClick={() => {
              openMileStone(workIndex);
            }}
          >
            Add MileStone
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSide;

import React from "react";
import { useForm } from "../../context/FormContext";
import AddUnit from "../AddUnit";

const MileStone = () => {
  const {
    activeRoomNo,
    activeUnit,
    activeComponent,
    activeVendor,
    formData,
    addMileStone,
    addValueToMileStone,
    removeMileStone,
  } = useForm();

  const addOneMilestone = () =>
    addMileStone(activeRoomNo, activeUnit, activeComponent, activeVendor);
  return (
    <div>
      <div className=" text-2xl flex justify-center items-center  mb-8">
        Vendor - {activeVendor + 1} Milestones
      </div>
      {formData[activeRoomNo].data[activeUnit].components[
        activeComponent
      ].workVendor[activeVendor].milestones.map((data, i) => {
        return (
          <div className="flex my-2 " key={i}>
            <div className="">
              <div className="relative flex w-full flex-wrap items-stretch   ">
                <input
                  name="milestone"
                  onChange={(e) => {
                    addValueToMileStone(
                      e,
                      activeRoomNo,
                      activeUnit,
                      activeComponent,
                      activeVendor,
                      i
                    );
                  }}
                  value={data.milestone}
                  type="text"
                  className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
                />
                <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-auto right-0 pr-3 py-3 flex">
                  <div className="inline-flex  flex-wrap w-10 pr-2 justify-start items-center text-xs">
                    milestone
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex w-24 flex-wrap items-stretch mx-2">
              <input
                name="percentage"
                onChange={(e) => {
                  addValueToMileStone(
                    e,
                    activeRoomNo,
                    activeUnit,
                    activeComponent,
                    activeVendor,
                    i
                  );
                }}
                value={data.percentage}
                type="number"
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
              />
              <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-4 right-0  py-3 flex">
                <div className="inline-flex  flex-wrap w-10 pr-2 justify-start items-center text-xs">
                  %
                </div>
              </div>
            </div>
            <div
              onClick={() =>
                removeMileStone(
                  activeRoomNo,
                  activeUnit,
                  activeComponent,
                  activeVendor,
                  i
                )
              }
              className="flex justify-center items-center cursor-pointer text-gray-700"
            >
              X
            </div>
          </div>
        );
      })}
      <AddUnit addOneFunction={addOneMilestone} />
    </div>
  );
};
export default MileStone;

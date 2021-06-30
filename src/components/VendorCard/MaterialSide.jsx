import React from "react";
import { useForm } from "../../context/FormContext";

const MaterialSide = ({ data, materialIndex }) => {
  const {
    activeRoomNo,
    activeUnit,
    activeComponent,
    addValueToMaterialInVendor,
  removeMaterialfromCOmponent
  } = useForm();

  const updateValuesInmaterrial = (e) =>
    addValueToMaterialInVendor(
      e,
      activeRoomNo,
      activeUnit,
      activeComponent,
      materialIndex,
      
    );
  return (
    <div className="my-4">
      <div className="fancy relative text-gray-400 my-4">
        <span>Material {materialIndex + 1}</span>
        <div
          onClick={() => {
            removeMaterialfromCOmponent(
              activeRoomNo,
              activeUnit,
              activeComponent,
              materialIndex
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
      

      <div className="flex my-2">
        <div>
          <div className="relative flex w-full flex-wrap items-stretch ">
            <input
              defaultValue={"Carpenter"}
              type="text"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            />
            <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-auto right-0 py-3 flex">
              <div className="inline-flex  flex-wrap w-10 pr-2 justify-start items-center text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline text-gray-700"
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
              </div>
            </div>
          </div>
        </div>

        <div className="mx-2">
          <div className="relative flex w-full flex-wrap items-stretch ">
            <input
              onChange={(e) => {
                updateValuesInmaterrial(e);
              }}
              value={data.item}
              name="item"
              type="text"
              placeholder="item"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            />
            <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-auto right-0 pr-3 py-3 flex">
              <div className="inline-flex  flex-wrap w-10 pr-2 justify-start items-center text-xs">
                item
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative flex w-full flex-wrap items-stretch ">
            <input
              onChange={(e) => {
                updateValuesInmaterrial(e);
              }}
              value={data.specification}
              name="specification"
              type="text"
              placeholder="specification"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            />
            <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-auto right-0 pr-8 py-3 flex">
              <div className="inline-flex  flex-wrap w-10 pr-2 justify-start items-center text-xs">
                specification
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex my-2">
        <div>
          <div className="relative flex w-full flex-wrap items-stretch ">
            <input
              defaultValue={"Plywood"}
              type="text"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            />
            <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-auto right-0  py-3 flex">
              <div className="inline-flex  flex-wrap w-10 pr-2 justify-start items-center text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline text-gray-700 "
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
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <div className="relative flex w-full flex-wrap items-stretch ">
            <input
              onChange={(e) => {
                updateValuesInmaterrial(e);
              }}
              value={data.quantity}
              name="quantity"
              type="number"
              placeholder="quantity"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            />
            <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-auto right-0 pr-3 py-3 flex">
              <div className="inline-flex  flex-wrap w-10 pr-2 justify-start items-center text-xs">
                quantity
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative flex w-full flex-wrap items-stretch ">
            <input
              onChange={(e) => {
                updateValuesInmaterrial(e);
              }}
              value={data.rate}
              name="rate"
              type="number"
              placeholder="rate"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            />
            <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-auto right-0 pr-8 py-3 flex">
              <div className="inline-flex  flex-wrap w-10 pr-2 justify-start items-center text-xs">
                rate
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>Rs{data.quantity * data.rate}</div>
    </div>
  );
};

export default MaterialSide;

import React from "react";

const AboutDiscriptionBoxes = ({ onChangeFunction, data }) => {
  return (
    <div className="mt-2">
      <textarea
        row="2"
        resize="none"
        type="text"
        placeholder="Discription"
        className="px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
        name="discription"
        onChange={(e) => {
          onChangeFunction(e);
        }}
        value={data.discription}
      />
      <div className="flex mt-3">
        <div className="relative flex w-full flex-wrap items-stretch ">
          <input
            onChange={(e) => {
              onChangeFunction(e);
            }}
            value={data.quantity}
            name="quantity"
            type="number"
            placeholder="Quantity"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
          />
          <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded  items-center justify-end w-auto right-0 pr-3 py-3 flex text-xs">
            <div className="inline-flex  flex-wrap max-w-w-10 justify-start items-center text-xs" style={{fontSize:"0.45rem"}}>
              Quantity
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-wrap items-stretch mx-3">
          <input
            onChange={(e) => {
              onChangeFunction(e);
            }}
            value={data.rate}
            name="rate"
            type="number"
            placeholder="Rate"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
          />
          <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-auto right-0 pr-3 py-3 flex">
            <div className="inline-flex  flex-wrap max-w-w-10 justify-start items-center text-xs " style={{fontSize:"0.45rem"}}>
              Rate
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-wrap items-stretch ">
          <input
            onChange={(e) => {
              onChangeFunction(e);
            }}
            value={data.unit}
            name="unit"
            type="text"
            placeholder="Units"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-300  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
          />
          <div className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-end w-auto right-0 pr-3 py-3 flex">
            <div className="inline-flex  flex-wrap max-w-w-10 justify-start items-center text-xs" style={{fontSize:"0.45rem"}}>
              Unit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDiscriptionBoxes;

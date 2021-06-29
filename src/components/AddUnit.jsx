import React from "react";

const AddUnit = ({ addOneFunction }) => {
  return (
    <div>
      <span
        className="justify-start items-center cursor-pointer text-lg inline-flex text-gray-500 hover:text-gray-900 "
        onClick={addOneFunction}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 items-center inline "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </span>
    </div>
  );
};

export default AddUnit;

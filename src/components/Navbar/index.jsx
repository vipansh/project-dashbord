import React, { useState, useEffect } from "react";
import { useForm } from "../../context/FormContext";

const Navbar = () => {
  const { formData } = useForm();

  const [BOQTotal, setBOQTotal] = useState(0);
  const [projectTotal, setprojectTotal] = useState(0);

  useEffect(() => {
    calboqTotal();
    calTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  function calboqTotal() {
    let tempData = [...formData];
    let count = 0;
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].data) {
        for (let j = 0; j < tempData[i].data.length; j++) {
          for (let k = 0; k < tempData[i].data[j].components.length; k++) {
            count =
              count +
              tempData[i].data[j].components[k].rate *
                tempData[i].data[j].components[k].quantity;
          }
        }
      }
    }
    setBOQTotal(count);
  }

  function calTotal() {
    let tempData = [...formData];
    let count = 0;
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].data) {
        for (let j = 0; j < tempData[i].data.length; j++) {
          for (let k = 0; k < tempData[i].data[j].components.length; k++) {
            for (
              let l = 0;
              l < tempData[i].data[j].components[k].workVendor.length;
              l++
            ) {
              count =
                count +
                tempData[i].data[j].components[k].workVendor[l].rate *
                  tempData[i].data[j].components[k].workVendor[l].quantity;
            }
            for (
              let l = 0;
              l < tempData[i].data[j].components[k].material.length;
              l++
            ) {
              count =
                count +
                tempData[i].data[j].components[k].material[l].rate *
                  tempData[i].data[j].components[k].material[l].quantity;
            }
          }
        }
      }
    }
    setprojectTotal(count);
  }

  return (
    <nav className="  text-gray-50  bg-blue-500 w-full px-12 h-20  text-1xl items-center my-auto py-8 ">
      <div className="flex justify-between items-center cursor-pointer">
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mx-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
          Back
        </div>
        <div className="flex justify-between">
          <div className="mx-4 px-4">
            BOQ Total:<span className="mx-2 text-lg">{BOQTotal}/</span>-{" "}
          </div>
          <div className="mx-4 px-4">
            Project Total:<span className="mx-2 text-lg">{projectTotal}</span>/-
          </div>
          <div className="mx-4 px-4 cursor-pointer">
            BOQ
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline  mx-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

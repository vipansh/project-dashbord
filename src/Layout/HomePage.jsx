import React, { useState } from "react";
import MileStone from "../components/MileStoneCard";
import SingleRoomCard from "../components/RoomCard/SingleRoomCard";
import SingleComponent from "../components/UnitCard/SingleComponent";
import VendorCard from "../components/VendorCard";
import { useForm } from "../context/FormContext";
import SaveModal from "../components/SaveModal";
const HomePage = () => {
  const [savedAnimation, setsavedAnimation] = useState(false);
  const [savedStatus, setSavedStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    activeUnit,
    activeComponent,
    activeVendor,
    formData,
    saveToLocalStorage,
  } = useForm();
  function onSaveAnimation() {
    setsavedAnimation(true);
    setShowModal(false);
    saveToLocalStorage();
    setTimeout(() => {
      setSavedStatus(true);
    }, 1000);
    setTimeout(() => {
      setsavedAnimation(false);
      setSavedStatus(false);
    }, 1800);
  }
  return (
    <div className="">
      {showModal && (
        <SaveModal
          showModal={showModal}
          setShowModal={setShowModal}
          onSaveAnimation={onSaveAnimation}
        />
      )}
      <div
        className="grid grid-cols-9 gap-1 h-full bg-gray-50 p-8 rounded"
        style={{ height: "55rem" }}
      >
        <div className=" col-span-2   border-2 mx-4 rounded-xl h-5/6 overflow-x-auto relative  ">
          <div className="mb-12 p-4 px-4">
            <div className=" text-2xl flex justify-center items-center h-5/6 overflow-x-auto mb-8">
              Add Units
            </div>
            {formData &&
              formData.map((data, i) => (
                <SingleRoomCard formIndex={i} key={data.id} />
              ))}
          </div>
          <div className=" sticky  inset-x-0 bottom-0 overflow-x-hidden z-10 bg-white min-w-full p-4 px-4">
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                disabled={savedAnimation}
                className={`px-5 py-3 w-full rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all `}
              >
                {savedAnimation ? (
                  !savedStatus ? (
                    "Saving..."
                  ) : (
                    <span className="relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      Saved
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  )
                ) : (
                  "Save"
                )}
              </button>
              <button className="px-5 py-3 w-full rounded-xl text-sm font-medium text-blue-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-blue-600 hover:border-4 focus:border-4 hover:border-blue-800 hover:text-blue-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 transition-all">
                Start Work
              </button>
            </div>
          </div>
        </div>
        {activeUnit + 1 ? (
          <div className=" col-span-2 p-4 px-4  border-2 mx-4 rounded-xl h-5/6 overflow-x-auto">
            {<SingleComponent />}
          </div>
        ) : (
          ""
        )}
        {activeComponent + 1 ? (
          <div className=" col-span-3 p-4 px-4  border-2 mx-4 rounded-xl h-5/6 overflow-x-auto">
            <VendorCard />
          </div>
        ) : (
          ""
        )}
        {activeVendor + 1 ? (
          <div className=" p-4 px-4 col-span-2  border-2 mx-4 rounded-xl h-5/6 overflow-x-auto ">
            <MileStone />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* <div>{JSON.stringify(formData)}</div> */}
    </div>
  );
};

export default HomePage;

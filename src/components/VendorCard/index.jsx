import React from "react";
import { useForm } from "../../context/FormContext";
import SingleVendorCard from "./SingleVendorCard";
const VendorCard = () => {
  const { activeComponent } = useForm();

  return (
    <div >
      <div className=" text-2xl flex justify-center items-center  mb-8">
        Component {activeComponent + 1}
      </div>
      <SingleVendorCard />
    </div>
  );
};

export default VendorCard;

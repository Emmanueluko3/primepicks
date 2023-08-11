import React, { useState } from "react";
import Item from "../../../assets/Item.svg";
import Vehicle from "../../../assets/Vehicle.svg";
import Home from "../../../assets/Home.svg";
import Footer from "../footer";
import Navbar from "../navbar";
import Button from "../../atoms/buttons/button";
import { Link } from "react-router-dom";

const CreateListing: React.FC = () => {
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const listingType = [
    {
      image: Item,
      title: "Item for Sale",
      description: "Create listing for single or multiple items to sell.",
    },
    {
      image: Vehicle,
      title: "Vehicle for Sale",
      description:
        "Create listing for your car, truck or other type of vehicles",
    },
    {
      image: Home,
      title: "Home for Sale/Rent",
      description:
        "Create listing for your single or multiple apartments available to sell/rent.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-[90%] mx-auto py-14">
        <h2 className="text-4xl font-semibold mb-8">
          <span className="text-customGreen italic">Choose</span> listing type
        </h2>

        <div className="w-[90%] mx-auto flex justify-between mb-16">
          {listingType.map((item, index) => (
            <div
              onClick={() => setSelectedType(index)}
              key={index}
              className={`w-[30%] ${
                selectedType === index
                  ? "border-customGreen border-2"
                  : "border-[#ACACAC] border"
              } cursor-pointer hover:border-customGreen p-5 py-14 rounded-lg flex flex-col justify-center items-center`}
            >
              <div className="w-44 h-20">
                <img src={item.image} className="w-full h-full" alt="" />
              </div>
              <h3 className="mb-3 mt-5 font-semibold text-2xl">{item.title}</h3>
              <p className="text-sm text-[#585858] text-center w-full">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div className="w-[25%]">
            <Link
              to="/"
              className="rounded-full border border-[#828282] hover:bg-gray-300 font-medium py-2 px-4 w-full flex justify-center items-center text-[#585858] text-base"
            >
              Cancel
            </Link>
          </div>

          <div className="w-[25%]">
            <Button>Continue</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateListing;

import React, { useEffect, useState } from "react";
import Item from "../../../assets/Item.svg";
import Vehicle from "../../../assets/Vehicle.svg";
import Home from "../../../assets/Home.svg";
import Footer from "../footer";
import Navbar from "../navbar";
import Button from "../../atoms/buttons/button";
import { Link } from "react-router-dom";
import Imageupload from "../../atoms/icons/Imageupload.svg";

const CreateListing: React.FC = () => {
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [productType, setProductType] = useState<number | null>(null);
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productType]);

  return (
    <>
      <Navbar />
      <div className="w-[90%] mx-auto py-14">
        {productType === null ? (
          <h2 className="text-4xl font-semibold mb-8">
            <span className="text-customGreen italic">Choose</span> listing type
          </h2>
        ) : (
          <h2 className="text-4xl font-semibold mb-8">
            {productType === 0 && (
              <span>
                Item Listing{" "}
                <span className="text-customGreen italic">Details</span>
              </span>
            )}
            {productType === 1 && (
              <span>
                Vehicle Listing{" "}
                <span className="text-customGreen italic">Details</span>
              </span>
            )}
            {productType === 2 && (
              <span>
                Home Listing{" "}
                <span className="text-customGreen italic">Details</span>
              </span>
            )}
          </h2>
        )}

        {productType === null ? (
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
                <h3 className="mb-3 mt-5 font-semibold text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm text-[#585858] text-center w-full">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <form
              action=""
              className="mx-auto mb-16 w-[70%] border border-[#ACACAC] rounded-lg p-5"
            >
              <div className="cursor-pointer border border-[#ACACAC] h-80 w-full rounded-md flex justify-center items-center flex-col mb-5">
                <div className="rounded-full w-16 h-16 bg-[#CDCDCD66] flex justify-center items-center mb-5">
                  <img src={Imageupload} className="h-10 w-10" alt="" />
                </div>
                <h3 className="font-semibold text-2xl mb-[6px]">Add Photos</h3>
                <p className="text-base">You can add up to five photos</p>
              </div>

              <div className="mb-5 w-full">
                <label htmlFor="title" className="text-semibold font-semibold">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  className="p-3 w-full rounded-lg border border-gray-500"
                  placeholder="Name of item"
                />
              </div>

              {productType === 2 ? (
                <>
                  <div className="w-full flex justify-between items-center flex-wrap">
                    <div className="w-[48%] mb-5">
                      <label
                        htmlFor="listing"
                        className="text-semibold font-semibold"
                      >
                        Listing Type
                      </label>
                      <br />

                      <select
                        className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                        name=""
                        id="listing"
                      >
                        <option
                          value=""
                          disabled
                          selected
                          className="bg-[#CDCDCD66]"
                        >
                          Select
                        </option>
                      </select>
                    </div>

                    <div className="w-[48%] mb-5">
                      <label
                        htmlFor="homeType"
                        className="text-semibold font-semibold"
                      >
                        Home Type
                      </label>
                      <br />

                      <select
                        className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                        name=""
                        id="homeType"
                      >
                        <option
                          value=""
                          disabled
                          selected
                          className="bg-[#CDCDCD66]"
                        >
                          Select
                        </option>
                      </select>
                    </div>
                    <div className="w-[48%] mb-5">
                      <label
                        htmlFor="bedroom"
                        className="text-semibold font-semibold"
                      >
                        Number of Bedrooms
                      </label>
                      <br />
                      <input
                        className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                        name=""
                        id="bedroom"
                        placeholder="Number of Bedrooms"
                      />
                    </div>
                    <div className="w-[48%] mb-5">
                      <label
                        htmlFor="bathroom"
                        className="text-semibold font-semibold"
                      >
                        Number of Bathrooms
                      </label>
                      <br />
                      <input
                        className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                        name=""
                        id="bathroom"
                        placeholder="Number of Bathrooms"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full mb-5 flex justify-between items-center">
                    {productType === 0 ? (
                      <div className="w-[48%]">
                        <label
                          htmlFor="category"
                          className="text-semibold font-semibold"
                        >
                          Category
                        </label>
                        <br />

                        <select
                          className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                          name=""
                          id="category"
                        >
                          <option
                            value=""
                            disabled
                            selected
                            className="bg-[#CDCDCD66]"
                          >
                            Select
                          </option>
                        </select>
                      </div>
                    ) : (
                      <div className="w-[48%]">
                        <label
                          htmlFor="vehicleType"
                          className="text-semibold font-semibold"
                        >
                          Vehicle Type
                        </label>
                        <br />

                        <select
                          className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                          name=""
                          id="vehicleType"
                        >
                          {" "}
                          <option
                            value=""
                            disabled
                            selected
                            className="bg-[#CDCDCD66]"
                          >
                            Select
                          </option>
                        </select>
                      </div>
                    )}
                    <div className="w-[48%]">
                      <label
                        htmlFor="condition"
                        className="text-semibold font-semibold"
                      >
                        Condition
                      </label>
                      <br />
                      <select
                        className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                        name=""
                        id="condition"
                      >
                        <option
                          value=""
                          selected
                          disabled
                          className="bg-[#CDCDCD66] text-gray-400"
                        >
                          Select
                        </option>
                        <option value="" className="bg-[#CDCDCD66]">
                          New
                        </option>
                        <option value="" className="bg-[#CDCDCD66]">
                          Used
                        </option>
                      </select>
                    </div>
                  </div>
                  {productType === 1 && (
                    <div className="w-full mb-5 flex justify-between items-center">
                      <div className="w-[48%]">
                        <label
                          htmlFor="year"
                          className="text-semibold font-semibold"
                        >
                          Year
                        </label>
                        <br />

                        <select
                          className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                          name=""
                          id="year"
                        >
                          {" "}
                          <option
                            value=""
                            disabled
                            selected
                            className="bg-[#CDCDCD66]"
                          >
                            Name of item
                          </option>
                        </select>
                      </div>
                      <div className="w-[48%]">
                        <label
                          htmlFor="model"
                          className="text-semibold font-semibold"
                        >
                          Model
                        </label>
                        <br />
                        <input
                          className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                          name=""
                          id="model"
                          placeholder="Vehicle Model"
                        />
                      </div>
                    </div>
                  )}
                </>
              )}
              <div className="w-full flex justify-between items-center flex-wrap mb-2">
                <div className="mb-5 w-full">
                  <label
                    htmlFor="price"
                    className="text-semibold font-semibold"
                  >
                    Price
                  </label>
                  <br />
                  <input
                    type="text"
                    id="price"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Price of item"
                  />
                </div>
              </div>
              <div className="w-full mb-5 flex justify-between items-center">
                <div className="w-[48%]">
                  <label
                    htmlFor="location"
                    className="text-semibold font-semibold"
                  >
                    Location
                  </label>
                  <br />
                  <input
                    type="text"
                    id="location"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Seller’s location"
                  />
                </div>
                <div className="w-[48%]">
                  <label
                    htmlFor="phone"
                    className="text-semibold font-semibold"
                  >
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="text"
                    id="phone"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="w-full mb-5">
                <label
                  htmlFor="decription"
                  className="text-semibold font-semibold"
                >
                  Description
                </label>
                <textarea
                  rows={3}
                  id="description"
                  className="p-4 w-full border border-[#ACACAC] rounded-lg"
                  placeholder="More detail of item"
                />
              </div>
              {productType === 2 ? (
                ""
              ) : (
                <div className="w-full mb-5">
                  <label
                    htmlFor="specification"
                    className="text-semibold font-semibold"
                  >
                    Specification
                  </label>
                  <textarea
                    rows={3}
                    id="specification"
                    className="p-4 w-full border border-[#ACACAC] rounded-lg"
                    placeholder="More detail of item"
                  />
                </div>
              )}
            </form>
            <div className="w-[70%] mx-auto flex justify-between items-center">
              <div className="w-[25%]">
                <button
                  onClick={() => setProductType(null)}
                  className="rounded-full border border-[#828282] hover:bg-gray-300 font-medium py-2 px-4 w-full flex justify-center items-center text-[#585858] text-base"
                >
                  Back
                </button>
              </div>

              <div className="w-[25%]">
                <Button>Continue</Button>
              </div>
            </div>
          </>
        )}

        {productType === null && (
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
              <Button onClick={() => setProductType(selectedType)}>
                Continue
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CreateListing;

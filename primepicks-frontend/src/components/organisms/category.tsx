import React from "react";
import Input from "../atoms/inputs/input";
import Dropdown from "../atoms/dropdown/dropdowx";

const Category: React.FC = () => {
  const categories = [
    {
      name: "Electronics",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Apparels",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Shoes",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Home Goods",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Musical Instruments",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Pet Supplies",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Toys & Games",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Garden",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Outdoor",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Beauty",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
  ];
  return (
    <div className="w-full p-5 border border-[#ACACAC] rounded-lg">
      <h2 className="font-medium text-3xl">Category</h2>
      <div className="w-full my-4">
        <Input type="text" placeholder="Search" />
      </div>

      <div className="flex flex-col w-full">
        {categories.map((item, index) => (
          <div className="my-2" key={index}>
            <Dropdown name={item.name} subCategories={item.subCategories} />
          </div>
        ))}
        {/* <button
          onClick={() => setDropdown(!dropdown)}
          className="flex justify-between font-medium items-center w-full"
        >
          Electronics{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`h-6 w-6 font-medium transform-rotate duration-300 ease-in-out ${
              dropdown ? "rotate-180" : "rotate-0"
            }`}
          >
            <g clip-path="url(#clip0_146_2014)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2929 8.29303C11.4805 8.10556 11.7348 8.00024 11.9999 8.00024C12.2651 8.00024 12.5194 8.10556 12.7069 8.29303L18.3639 13.95C18.5461 14.1386 18.6469 14.3912 18.6446 14.6534C18.6423 14.9156 18.5372 15.1664 18.3518 15.3518C18.1663 15.5373 17.9155 15.6424 17.6533 15.6447C17.3911 15.647 17.1385 15.5462 16.9499 15.364L11.9999 10.414L7.04994 15.364C6.86133 15.5462 6.60873 15.647 6.34653 15.6447C6.08434 15.6424 5.83353 15.5373 5.64812 15.3518C5.46271 15.1664 5.35754 14.9156 5.35526 14.6534C5.35298 14.3912 5.45378 14.1386 5.63594 13.95L11.2929 8.29303Z"
                fill="#050505"
              />
            </g>
            <defs>
              <clipPath id="clip0_146_2014">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Category;
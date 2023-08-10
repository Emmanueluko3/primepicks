import React, { useState } from "react";
import Lgtv from "../../../assets/Lgtv.svg";
import Lgtv2 from "../../../assets/Lgtv2.svg";
import Lgtv3 from "../../../assets/Lgtv3.svg";
import Lgtv4 from "../../../assets/Lgtv4.svg";
import Lgtv5 from "../../../assets/Lgtv5.svg";
import Button from "../../atoms/buttons/button";

// interface ProductViewProps {
//   image: string;
//   title: string;
//   price: number | string;
//   oldPrice: number | string | null;
// }

const productImages = [Lgtv, Lgtv2, Lgtv3, Lgtv4, Lgtv5];
const specifications = [
  "SKU: SA948EA29N628NAFAMZ",
  "Product Line: Kaylas Mart Electronics",
  " Model: Samsung 5300",
  "Size (L x W x H cm): 1145.0 x 659.0 x 136.0‎",
  "Weight (kg): 11",
  "Color: Black",
  "Main Material: N/A",
];

const ProductView: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="w-full mb-5 flex justify-between p-6 border border-[#ACACAC] rounded-lg">
        <div className="flex flex-col items-center w-[58%]">
          <div className="py-8 px-2 h-96">
            <img src={selectedImage} className="w-full h-full" alt="Laptop" />
          </div>
          <div className="w-full flex">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`rounded-lg h-20 w-24 hover:border-customGreen border p-[2px] mr-3 ${
                  selectedImage === image
                    ? "border-customGreen"
                    : "border-[#828282]"
                }`}
              >
                <img src={image} className="w-full h-full" alt="Laptop" />
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 w-[38%]">
          <div className="border-b-2 pb-5 mb-5">
            <div className="mb-2">
              <span className="bg-customLightGreen text-customGreen rounded-full text-sm px-[10px] py-[6px]">
                New
              </span>
            </div>
            <h4 className="font-medium text-3xl">
              Samsung All New 43 Inch 5300 FHD Smart Television
            </h4>
            <p>Location: Lagos</p>
            <p>+ 234 813 1210 163</p>
            <h3>N 98,000</h3>
          </div>
          <div className="w-full mb-5">
            <p className="mb-2">Quantity</p>
            <div className="flex items-center mb-5">
              <button
                onClick={() =>
                  setQuantity((item) => (item == 0 ? item : item - 1))
                }
                className="p-[6px] bg-[#D2D1D1] rounded-[4px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 font-extrabold"
                >
                  <path
                    d="M3.99609 13H20.0001C20.2653 13 20.5197 12.8946 20.7072 12.7071C20.8947 12.5196 21.0001 12.2652 21.0001 12C21.0001 11.7348 20.8947 11.4804 20.7072 11.2929C20.5197 11.1054 20.2653 11 20.0001 11H3.99609C3.73088 11 3.47652 11.1054 3.28899 11.2929C3.10145 11.4804 2.99609 11.7348 2.99609 12C2.99609 12.2652 3.10145 12.5196 3.28899 12.7071C3.47652 12.8946 3.73088 13 3.99609 13Z"
                    fill="#1C1B1B"
                  />
                </svg>
              </button>
              <span className="px-4 ">{quantity}</span>
              <button
                onClick={() => setQuantity((item) => item + 1)}
                className="p-[6px] bg-[#D2D1D1] rounded-[4px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="h-6 w-6"
                >
                  <path
                    d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
                    fill="#1C1B1B"
                  />
                </svg>
              </button>
            </div>
            <p className="text-[16px]">
              The T5300 has built-in Wi-Fi and Ethernet connectivity to allow
              access to your favorite apps and internet-based content, plus
              content-sharing and screen-mirroring with other smart devices such
              as your smartphone or tablet.{" "}
            </p>
          </div>
          <div className="w-full">
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col p-6 border border-[#ACACAC] rounded-lg">
        <h2 className="text-lg font-medium">Specifications</h2>
        <ul className="p-4 mx-3 list-disc">
          {specifications.map((item, index) => (
            <li className="text-[#2F2F2F] my-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductView;

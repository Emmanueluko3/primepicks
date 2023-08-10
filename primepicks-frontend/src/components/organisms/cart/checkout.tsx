import React, { useState } from "react";
import Lgtv from "../../../assets/Lgtv.svg";
import Suggestions from "../product/suggestedPicks";
import Navbar from "../navbar";
import Footer from "../footer";
import Button from "../../atoms/buttons/button";

const Checkout: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Navbar />
      <div className="mx-auto mt-10 w-[90%]">
        {" "}
        <h2 className="font-semibold text-4xl mb-7">Check Out</h2>
        <div className="w-[35%]">
          <h2 className="font-medium text-xl mb-5">Cart</h2>
          <div className="w-full mb-4 flex flex-col p-3 border border-[#ACACAC] rounded-lg">
            <div className="flex justify-between items-center border-b-[0.7px] mb-5 pb-5 border-[#CDCDCD]">
              <div className="flex justify-between items-center">
                <div className="rounded-lg h-24 w-32  mr-2 border p-3 border-[#828282]">
                  <img src={Lgtv} className="w-full h-full" alt="Laptop" />
                </div>
                <div className="flex flex-col py-1 justify-between">
                  <h4 className="text-sm">Samsung All New 43 I...</h4>
                  <p className="text-[#686767]">Lagos</p>
                  <h3 className="text-[16px] font-semibold">N 98,000</h3>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <h3 className="font-semibold text-[16px] mb-4">N196,000</h3>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      setQuantity((item) => (item === 0 ? item : item - 1))
                    }
                    className="h-8 w-8 flex justify-center items-center  bg-[#D2D1D1] rounded-[4px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="font-bold text-lg"
                    >
                      <path
                        d="M3.99609 13H20.0001C20.2653 13 20.5197 12.8946 20.7072 12.7071C20.8947 12.5196 21.0001 12.2652 21.0001 12C21.0001 11.7348 20.8947 11.4804 20.7072 11.2929C20.5197 11.1054 20.2653 11 20.0001 11H3.99609C3.73088 11 3.47652 11.1054 3.28899 11.2929C3.10145 11.4804 2.99609 11.7348 2.99609 12C2.99609 12.2652 3.10145 12.5196 3.28899 12.7071C3.47652 12.8946 3.73088 13 3.99609 13Z"
                        fill="#1C1B1B"
                      />
                    </svg>
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={() => {
                      setQuantity((item) => item + 1);
                    }}
                    className="h-8 w-8 flex justify-center items-center bg-[#D2D1D1] rounded-[4px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="font-bold text-lg"
                    >
                      <path
                        d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
                        fill="#1C1B1B"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-2 flex justify-between items-center">
            <h4 className="text-[16px] font-medium">Total</h4>
            <h3 className="text-xl font-bold">N392,000</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;

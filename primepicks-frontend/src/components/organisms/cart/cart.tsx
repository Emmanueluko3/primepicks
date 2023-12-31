import React, { useState } from "react";
import Lgtv from "../../../assets/Lgtv.svg";
import Suggestions from "../product/suggestedPicks";
import Navbar from "../navbar";
import Footer from "../footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../store/actions";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const reduxStore: any = useSelector((state) => state);

  const totalItemsPrice: any = Object.values(reduxStore.cart.cart).reduce(
    (total, item: any) => total + item.price,
    0
  );

  return (
    <>
      <Navbar />
      <div className="mx-auto mt-10 w-[90%]">
        {" "}
        <h2 className="font-semibold text-4xl mb-7">Cart</h2>
        <div className="w-full mb-6 flex flex-col p-6 border border-[#ACACAC] rounded-lg">
          {Object.values(reduxStore.cart.cart).map(
            (item: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center border-b-[0.7px] mb-5 pb-5 border-[#CDCDCD]"
              >
                <div className="flex justify-between items-center">
                  <input
                    type="checkbox"
                    className="rounded-lg h-4 w-4 required:bg-customGreen checked:bg-customGreen"
                  />
                  <div className="rounded-lg h-24 w-32  mx-4 border p-3 border-[#828282]">
                    <img
                      src={item.imageUrls[0]}
                      className="w-full h-full"
                      alt="Laptop"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h4 className="text-lg">{item.title}</h4>
                    <p className="text-[#686767]">{item.location}</p>
                    {/* <h3 className="text-xl font-medium">N {item.price}</h3> */}
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="text-[#A82424] text-sm border border-[#A82424] rounded-full hover:text-white hover:bg-[#A82424] px-5 py-1 mb-5"
                  >
                    Remove
                  </button>
                  <h3 className="text-xl font-medium">N {item.price}</h3>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex justify-between items-end mb-10">
          <form action="" className="w-[35%]">
            <h4 className="font-medium text-lg mb-[5px]">Add Order Note</h4>
            <textarea
              rows={3}
              className="p-4 w-full border border-[#ACACAC] rounded-lg placeholder:italic"
              placeholder="Type your message here"
            />
          </form>
          <div className="w-[40%]">
            <div className="w-full mb-2 flex justify-between items-center">
              <h4 className="text-[16px] font-medium">Total</h4>
              <h3 className="text-xl font-bold">N {totalItemsPrice}</h3>
            </div>
            <p className="mb-1 text-[#686767]">
              Shipping & taxes are calculated at check out
            </p>
            <div className="w-full">
              <Link
                to="/checkout"
                className="rounded-full flex items-center justify-center hover:opacity-90 text-white font-medium w-full h-full py-2 px-6 bg-customGreen"
              >
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Suggestions />
      <Footer />
    </>
  );
};

export default Cart;

import React from "react";
import Navbar from "../components/organisms/navbar";
import HeroImage from "../assets/HeroImg.svg";
import Button from "../components/atoms/buttons/button";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-[50%]">
            <div className="mb-2">
              <span className="bg-customLightGreen text-customGreen rounded-full font-semibold text-[16px] px-4 py-2">
                Explore, Buy & Sell
              </span>
            </div>
            <h2 className="font-semibold text-5xl leading-[70px]">
              Your One-Stop <br /> Ecommerce{" "}
              <span className="text-customGreen">Marketplace</span>
            </h2>
            <p className="text-gray-400 text-[16px] mb-6">
              Explore a world of limitless possibilities. Join our community of
              buyers and sellers today to embark on a journey of convenience and
              connection.
            </p>
            <form className="w-[85%] flex items-stretch" action="">
              <input
                type="text"
                placeholder="Enter keyword"
                className="w-[70%] rounded-full py-3 px-4 mr-2 bg-[#F6F6F6] border border-[#CDCDCD]"
              />
              <div className="w-[28%]">
                <Button>Search</Button>
              </div>
            </form>
          </div>
          <div className="w-[42%]">
            <img src={HeroImage} alt="Shoping" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

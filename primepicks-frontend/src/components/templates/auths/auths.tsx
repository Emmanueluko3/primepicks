import React from "react";
import Logo from "../../../assets/Logo.svg";
import FormSection from "./formSection";

const Auths: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <FormSection />

      <div className="bg-customGreen w-full h-full p-20 text-white">
        <p className="flex items-center text-white font-semibold text-3xl mb-6">
          <img src={Logo} alt="Logo" />
          PrimePicks
        </p>

        <h2 className="text-white font-bold text-3xl mb-3">
          Empowering Your Shopping <br /> Experience, One Click at a Time.
        </h2>
        <p className="text-[#E5E6EB] text-[16px]">
          Discover a curated selection of products that resonate with your
          preferences, enjoy real-time updates, and relish the joy of effortless
          shopping.
        </p>
      </div>
    </div>
  );
};

export default Auths;

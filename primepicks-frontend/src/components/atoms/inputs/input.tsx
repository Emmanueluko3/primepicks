import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="border w-full border-gray-300 bg-[#F9F9FB] rounded-md p-2 focus:outline-none focus:border-customGreen"
    />
  );
};

export default Input;

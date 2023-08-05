import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
    />
  );
};

export default Input;

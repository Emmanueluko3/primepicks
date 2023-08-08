import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="border w-full border-gray-300 p-2 focus:outline-none focus:border-customGreen"
    >
      {children}
    </button>
  );
};

export default Button;

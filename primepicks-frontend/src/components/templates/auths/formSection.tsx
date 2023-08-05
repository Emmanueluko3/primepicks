import React from "react";

const FormSection: React.FC = () => {
  return (
    <div className="p-12 h-screen w-full flex items-start justify-center flex-col">
      <h2 className="text-customGreen text-2xl font-bold">
        Create your account.
      </h2>
      <p>
        Start your website in seconds. Already have an account?{" "}
        <span className="text-blue-600 cursor-pointer hover:font-bold">
          Login here
        </span>
      </p>
    </div>
  );
};

export default FormSection;

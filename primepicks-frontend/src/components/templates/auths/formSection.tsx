import React, { useState } from "react";
import AuthButton from "../../atoms/buttons/authButton";
import Google from "../../atoms/icons/Google.png";
import Facebook from "../../atoms/icons/Facebook.png";
import Input from "../../atoms/inputs/input";
import { Link } from "react-router-dom";

const FormSection: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div className="p-12 h-screen w-full flex items-start justify-center flex-col">
      {isRegistered ? (
        <h2 className="text-gray-950 text-2xl font-bold mb-5">Welcome back</h2>
      ) : (
        <>
          <h2 className="text-customGreen text-2xl font-bold mb-2">
            Create your account.
          </h2>
          <p className="font-medium mb-7">
            Start your website in seconds. Already have an account?{" "}
            <span
              onClick={() => setIsRegistered(!isRegistered)}
              className="text-blue-600 cursor-pointer hover:font-bold"
            >
              Login here
            </span>
          </p>
        </>
      )}

      <div className="flex justify-between mb-3 items-center w-full">
        <div className="w-[48%]">
          <AuthButton label="Sign up with Google" icon={Google} />
        </div>
        <div className="w-[48%]">
          <AuthButton label="Facebook" icon={Facebook} />
        </div>
      </div>
      <h4 className="w-full mb-3 text-[#6B7180] text-[16] flex justify-between items-center">
        <span className="h-[2px] bg-[#E5E6EB] flex w-[45%]"></span> or{" "}
        <span className="h-[2px] bg-[#E5E6EB] flex w-[45%]"></span>
      </h4>
      {isRegistered ? (
        <>
          <form action="" className="flex w-full justify-between flex-wrap">
            <div className="w-full mb-5">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <Input type="email" placeholder="name@flowbite.com" />
            </div>

            <div className="w-full mb-5">
              <label htmlFor="email" className="mb-2">
                Password
              </label>
              <Input type="password" placeholder="**********" />
            </div>

            <div className="w-full mb-5 flex justify-between items-center">
              <div className="flex">
                <div className="h-4 w-4 mr-2">
                  <Input type="checkbox" className="rounded-md" />
                </div>
                <p className="text-[#6B7180] text-[12px] font-medium">
                  Remember me
                </p>
              </div>
              <span className="text-customGreen font-medium text-[12px] cursor-pointer">
                Forgot password?
              </span>
            </div>
            <div className="w-full">
              <button className="rounded-full w-full p-3 text-white font-semibold text-[16px] hover:opacity-95 bg-customGreen">
                Login
              </button>
            </div>
          </form>
          <p className="text-[#828282] mt-4">
            Don’t have an account yet?{" "}
            <span
              onClick={() => setIsRegistered(!isRegistered)}
              className="text-customGreen cursor-pointer hover:font-bold"
            >
              Sign up
            </span>
          </p>
        </>
      ) : (
        <form action="" className="flex w-full justify-between flex-wrap">
          <div className="w-[48%] mb-2">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <Input type="email" placeholder="name@flowbite.com" />
          </div>
          <div className="w-[48%] mb-2">
            <label htmlFor="email" className="mb-2">
              Full Name
            </label>
            <Input type="email" placeholder="e.g. Bonnie Green" />
          </div>
          <div className="w-[48%] mb-4">
            <label htmlFor="email" className="mb-2">
              Location
            </label>
            <Input type="email" placeholder="USA" />
          </div>
          <div className="w-[48%] mb-4">
            <label htmlFor="email" className="mb-2">
              Password
            </label>
            <Input type="password" placeholder="**********" />
          </div>
          <div className="w-full mb-3 flex">
            <div className="h-4 w-4 mr-2">
              <Input type="checkbox" className="rounded-md" />
            </div>
            <p className="text-[#6B7180] text-[12px]">
              By signing up, you are creating a PrimePicks account, and you
              agree to our{" "}
              <Link to="" className="text-blue-600">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link to="" className="text-blue-600">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="w-full mb-3 flex">
            <div className="h-4 w-4 mr-2">
              <Input type="checkbox" className="rounded-md" />
            </div>
            <p className="text-[#6B7180] text-[12px]">
              Email me about product updates and resources.
            </p>
          </div>
          <div className="w-full">
            <button className="rounded-full w-full p-3 text-white font-semibold text-[16px] hover:opacity-95 bg-customGreen">
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormSection;

import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const Form = ({ isSignInPage = false }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && { fullName: "" }),
    email: "",
    password: "",
  });
  return (
    <div className="bg-white w-[600px] h-[550px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold ">
        Welcome {isSignInPage && "Back"}
      </div>
      <div className="text-[16px] font-light mb-14">
        {isSignInPage ? "Signin to get explore" : "Signup to get started"}
      </div>
      <form onSubmit={() => {}} className="flex flex-col w-full items-center">
        {!isSignInPage && (
          <Input
            label="Full name"
            name="fullname"
            placeholder="Enter your full name"
            className="mb-6"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        )}
        <Input
          label="Email Address"
          name="email"
          placeholder="Enter your Email"
          className="mb-6"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          label="Password"
          name="password"
          placeholder="Enter your Password"
          className="mb-14"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button label={isSignInPage ? "Signin" : "Signup"} type="submit" />
      </form>
      <div className="mt-2">
        {isSignInPage ? "Don't have an account" : "Already have an account? "}
        <span className="text-blue-600 cursor-pointer underline">
          {isSignInPage ? " Signup" : " Signin"}
        </span>
      </div>
    </div>
  );
};

export default Form;

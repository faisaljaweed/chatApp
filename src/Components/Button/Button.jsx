import React from "react";

const Button = ({
  label = "Button",
  type = "button",
  className = "",
  disable = false,
}) => {
  return (
    <div className="w-1/2">
      <button
        type={type}
        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
   focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center${className}`}
        disabled={disable}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

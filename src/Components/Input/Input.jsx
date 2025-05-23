import React from "react";

const Input = ({
  label = "",
  fname = "",
  type = "text",
  inputClassName = "",
  className = "",
  isRequired = false,
  placeholder = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className={`w-1/2 ${className}`}>
      <label for={fname} className="block  text-sm font-medium text-gray-800 ">
        {label}
      </label>
      <input
        type={type}
        id={fname}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
      />
    </div>
  );
};

export default Input;

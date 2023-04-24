import React from "react";

const InputField = ({
  type,
  placeholder,
  name,
  id,
  htmlfor,
  label,
  handleChange,
  value,
  handleBlur
}) => {
  return (
    <>
      <div>
        <label htmlFor={htmlfor} className="tracking-wider">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          className="block py-2 px-6  rounded border-0 text-gray-600 shadow ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 max-sm:text-sm w-full my-2 focus:text-indigo-700 tracking-wider"
          onChange={handleChange}
          value={value}
          onBlur = {handleBlur}
        />
      </div>
    </>
  );
};

export default InputField;

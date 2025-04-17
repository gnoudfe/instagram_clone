// src/components/common/Input.tsx
import { InputProps } from "@/types/types";
import React from "react";

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  label,
  isTransparent = false,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onBlur={onBlur}
        className={
          isTransparent
            ? "w-full p-2 text-white placeholder-white focus:outline-none text-sm bg-transparent border-none outline-none"
            : "w-full p-2 bg-[#121212] border border-gray-700 rounded text-white placeholder-white focus:border-blue-500 focus:outline-none text-sm"
        }
      />
    </div>
  );
};

export default Input;

// src/components/common/Input.tsx
import { InputProps } from '@/types/types';
import React from 'react';

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  label
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
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default Input;
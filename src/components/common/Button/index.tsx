// src/components/common/Button.tsx
import { ButtonProps } from "@/types/types";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  rounded = "md",
  fullWidth = false,
  onClick,
  disabled = false,
}) => {
  const baseClasses =
    "py-2 px-4 font-medium focus:outline-none transition-colors flex items-center justify-center gap-2";

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${roundedClasses[rounded]
        } ${widthClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

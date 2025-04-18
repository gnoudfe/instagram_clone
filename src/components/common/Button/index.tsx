// src/components/common/Button.tsx
import { ButtonProps } from "@/types/types";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  rounded = "md",
  size = "md",
  fullWidth = false,
  onClick,
  disabled = false,
}) => {
  const baseClasses =
    "font-medium focus:outline-none transition-colors flex items-center justify-center gap-2";

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  const sizeClasses = {
    xs: "py-1 px-2 text-xs",
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-2.5 px-5 text-lg",
    xl: "py-3 px-6 text-xl",
  };

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-[#363636] hover:bg-[#4f4f4f] text-[#F5F5F5]",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        roundedClasses[rounded]
      } ${widthClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
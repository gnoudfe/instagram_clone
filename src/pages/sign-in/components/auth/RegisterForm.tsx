import React from "react";

const RegisterForm = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 bg-[#121212] border border-gray-700 rounded text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none text-sm"
      />
    </form>
  );
};

export default RegisterForm;

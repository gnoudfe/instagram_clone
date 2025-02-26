import React from "react";

const RegisterForm = () => {
  return (
    <form>
      { /* 
        TODO : change to use Input component
        *Infor: Register page have 5 inputs : username, email, password, gender, date of birth
    */}
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 bg-[#121212] border border-gray-700 rounded text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none text-sm"
      />
    </form>
  );
};

export default RegisterForm;

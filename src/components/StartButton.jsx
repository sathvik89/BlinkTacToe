import React from "react";
const StartButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer px-6 py-3 bg-[#4CAF50] transition-all duration-300 shadow-lg text-white rounded-xl font-medium hover:bg-[#8BC34A] hover:scale-105 "
    >
      Start Game!
    </button>
  );
};

export default StartButton;

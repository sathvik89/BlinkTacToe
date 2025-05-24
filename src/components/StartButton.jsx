import React from "react";
const StartButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-10 py-3 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg tracking-wide bg-emerald-400 hover:scale-105 cursor-pointer"
    >
      Start Game!
    </button>
  );
};

export default StartButton;

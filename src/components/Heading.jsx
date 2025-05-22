import React from "react";
const Heading = ({ text }) => {
  return (
    <h1 className="text-5xl md:text-6xl font-extrabold text-[#FF5E7E] drop-shadow-[0_3px_6px_rgba(255,94,126,0.6)]">
      {text}
    </h1>
  );
};

export default Heading;

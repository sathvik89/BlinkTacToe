import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({ text, pagetonavigate }) => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(`/${pagetonavigate}`)}
      className="bg-[#00D2FF] mt-3.5 text-white px-10 py-3 cursor-pointer rounded-xl drop-shadow-xs hover:shadow-blue-400 transition duration-20 text-lg font-bold"
    >
      {text}
    </motion.button>
  );
};

export default Button;

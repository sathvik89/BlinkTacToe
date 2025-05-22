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
      className="bg-blue-600 text-white px-8 py-3 cursor-pointer rounded-xl shadow-lg hover:shadow-blue-400 transition duration-200 text-lg font-bold tracking-wide"
    >
      {text}
    </motion.button>
  );
};

export default Button;

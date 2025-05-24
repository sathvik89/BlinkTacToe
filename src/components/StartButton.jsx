import React from "react";
import { motion } from "framer-motion";

const StartButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9, rotate: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-pointer px-6 py-3 bg-[#4CAF50] transition-all duration-300 shadow-lg text-white rounded-xl font-medium hover:bg-[#8BC34A] hover:scale-105"
    >
      Start Game!
    </motion.button>
  );
};

export default StartButton;

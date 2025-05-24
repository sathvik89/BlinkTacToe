import React from "react";
import { motion } from "framer-motion";

const SetupHeading = () => {
  return (
    <div className="text-center mb-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold text-center text-[#aab7f9] drop-shadow-lg"
      >
        Setup Your Game
      </motion.h1>
    </div>
  );
};

export default SetupHeading;

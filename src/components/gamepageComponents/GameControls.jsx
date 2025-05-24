import React, { useState } from "react";
import { motion } from "framer-motion";

const GameControls = ({ handleReset, handleChangePlayers, isWin }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex justify-center gap-4"
    >
      {isWin && (
        <button
          onClick={handleReset}
          className="cursor-pointer px-6 py-3 bg-[#4CAF50] text-white rounded-xl font-medium hover:bg-[#8BC34A] transition-colors"
        >
          Play Again
        </button>
      )}

      <button
        onClick={handleChangePlayers}
        className="px-6 cursor-pointer py-3 bg-[#2196F3] text-white rounded-xl font-medium hover:bg-[#1E88E5] transition-colors"
      >
        Change Players
      </button>
    </motion.div>
  );
};

export default GameControls;

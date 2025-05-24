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
          className="cursor-pointer px-6 py-3 bg-[#58588C] rounded-xl font-medium hover:bg-[#7070A0] transition-colors"
        >
          Play Again
        </button>
      )}

      <button
        onClick={handleChangePlayers}
        className="px-6 cursor-pointer py-3 bg-[#58588C] rounded-xl font-medium hover:bg-[#7070A0] transition-colors"
      >
        Change Players
      </button>
    </motion.div>
  );
};

export default GameControls;

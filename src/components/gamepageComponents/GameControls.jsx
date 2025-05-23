import React from "react";
import { motion } from "framer-motion";

const GameControls = ({ handleReset, handleChangePlayers }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex justify-center gap-4"
    >
      <button
        onClick={handleReset}
        className="cursor-pointer px-6 py-3 bg-[#3D3D6B] rounded-xl font-medium hover:bg-[#4D4D7B] transition-colors"
      >
        Play Again
      </button>

      <button
        onClick={handleChangePlayers}
        className="px-6 cursor-pointer py-3 bg-[#3D3D6B] rounded-xl font-medium hover:bg-[#4D4D7B] transition-colors"
      >
        Change Players
      </button>
    </motion.div>
  );
};

export default GameControls;

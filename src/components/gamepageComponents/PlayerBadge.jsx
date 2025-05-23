import React from "react";
import { motion } from "framer-motion";

const PlayerBadge = ({ player, isActive, score }) => {
  return (
    <motion.div
      className={`flex items-center gap-3 px-4 py-2 rounded-xl shadow-lg transition-all duration-300 
        ${isActive ? "bg-yellow-500 text-black" : "bg-white/10 text-white"}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-2xl">{player.category?.icon}</div>

      <div>
        <p className="text-sm font-bold">{player.name}</p>
        {typeof score === "number" && (
          <p className="text-xs text-white/70">Score: {score}</p>
        )}
      </div>

      {isActive && (
        <div className="ml-auto text-xs font-semibold bg-black/30 px-2 py-1 rounded">
          Your Turn
        </div>
      )}
    </motion.div>
  );
};

export default PlayerBadge;

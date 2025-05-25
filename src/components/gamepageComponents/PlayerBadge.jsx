import React from "react";
import { motion } from "framer-motion";

const PlayerBadge = ({
  player,
  isActive,
  score,
  currentRound,
  totalRounds,
}) => {
  const isMultiRound = totalRounds > 1;

  return (
    <motion.div
      className={`px-4 py-3 rounded-xl shadow-md transition-all duration-300 w-full 
        ${isActive ? "bg-yellow-300 text-gray-900" : "bg-blue-900 text-white"}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* player inf */}
      <div className="flex items-center gap-3">
        <div className="text-3xl">{player.category?.icon}</div>
        <div>
          <p className="text-base font-bold">{player.name}</p>
          <p className="text-sm">
            Score: {score} / {totalRounds}
          </p>
        </div>
      </div>
      {/* showing whose active and who is not  */}
      {isActive && (
        <div className="mt-2 flex justify-between items-center text-sm">
          <span className="bg-white text-blue-900 px-2 py-0.5 rounded">
            Your Turn
          </span>
          {isMultiRound && (
            <span className="text-white/80">
              Round {currentRound} / {totalRounds}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default PlayerBadge;

import React from "react";
import { motion } from "framer-motion";

const PlayerTurnIndicator = ({
  winner,
  currentPlayer,
  player1,
  player2,
  currentEmoji,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#3D3D6B] p-4 rounded-xl text-center flex flex-col justify-center"
    >
      {winner ? (
        <div className="p-6 rounded-xl bg-blue-200 backdrop-blur-sm border border-gray-700 flex flex-col items-center text-center gap-4 shadow-lg">
          <h2 className="text-gray-900 font-extrabold text-lg">
            {winner === 1 ? player1.name : player2.name} Wins!
          </h2>

          <div className="text-5xl text-pink-400 animate-bounce">🏆</div>
        </div>
      ) : (
        <>
          <h2 className="text-lg text-white font-medium mb-2">Current Turn</h2>
          <div className="flex items-center justify-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                currentPlayer === 1 ? "bg-[#FF5E7E]" : "bg-[#00D2FF]"
              }`}
            ></div>
            <span className="text-green-400 font-extrabold">
              {currentPlayer === 1 ? player1.name : player2.name}
            </span>
          </div>
          <div className="mt-2 text-3xl animate-pulse">{currentEmoji}</div>
        </>
      )}
    </motion.div>
  );
};

export default PlayerTurnIndicator;

import React from "react";
import { motion } from "framer-motion";

const PlayerTurnIndicator = ({
  winner,
  currentPlayer,
  player1,
  player2,
  currentEmoji,
  gameCompleted,
  scores,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#3D3D6B] p-4 rounded-xl text-center flex flex-col justify-center"
    >
      {gameCompleted ? (
        <div className="p-6 rounded-xl bg-blue-200 backdrop-blur-sm border border-gray-700 flex flex-col items-center text-center gap-4 shadow-lg">
          <h2 className="text-gray-900 font-extrabold text-lg">
            {scores[1] > scores[2]
              ? `${player1.name} Wins the Game!`
              : scores[2] > scores[1]
              ? `${player2.name} Wins the Game!`
              : "It's a Draw!"}
          </h2>
          <div className="text-5xl text-pink-400 animate-bounce">🏆</div>
          <div className="text-sm text-gray-700">
            Final Score: {player1.name} {scores[1]} - {scores[2]} {player2.name}
          </div>
        </div>
      ) : winner ? (
        // This round's winner

        <div className="p-6 rounded-xl bg-blue-200 backdrop-blur-sm border border-gray-700 flex flex-col items-center text-center gap-4 shadow-lg">
          <h2 className="text-gray-900 font-extrabold text-lg">
            {winner === 1 ? player1.name : player2.name} Wins This Round!
          </h2>
          <div className="text-5xl text-pink-400 animate-bounce">🎉</div>
          {scores[1] !== 0 || scores[2] !== 0 ? (
            <div className="text-sm text-gray-700">
              Current Score: {player1.name} {scores[1]} - {scores[2]}{" "}
              {player2.name}
            </div>
          ) : null}
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

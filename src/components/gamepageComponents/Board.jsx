import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Board = ({ board, handleClick, winner, winningIndices }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="aspect-square max-w-md mx-auto mb-8"
    >
      <div className="grid grid-cols-3 gap-3 h-full">
        {board.map((cell, idx) => {
          const isWinCell = winningIndices.includes(idx);
          const isClickable = !cell && !winner;

          return (
            <motion.button
              key={idx}
              className={`rounded-xl flex items-center justify-center text-5xl font-bold
                ${
                  isWinCell //win cell colouring
                    ? "bg-gradient-to-r from-pink-500/30 to-cyan-400/30"
                    : "bg-[#3D3D6B]"
                }
                ${isClickable ? "hover:bg-[#4D4D7B] cursor-pointer" : ""}
              `}
              whileHover={isClickable ? { scale: 1.05 } : false}
              whileTap={isClickable ? { scale: 0.95 } : false}
              onClick={() => handleClick(idx)}
            >
              <AnimatePresence mode="wait">
                {cell && (
                  <motion.span
                    key={`${idx}-${cell.emoji}`}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 10 }}
                    transition={{ type: "spring", damping: 12 }}
                    className={
                      cell.player === 1 ? "text-pink-400" : "text-cyan-400"
                    }
                  >
                    {cell.emoji}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};
export default Board;

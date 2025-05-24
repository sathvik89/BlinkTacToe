import React from "react";
import { motion } from "framer-motion";

const PlayerCard = ({ player, playerNo,  setPlayer }) => {
  return (
    <motion.div
      className="bg-[#1E1E2F] flex justify-center flex-col rounded-lg px-4 py-4 text-white shadow-xl w-full max-w-md mx-auto border border-white/10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="text-lg font-light font-serif text-fuchsia-300 text-center  mb-4 px-4 py-2 rounded-md inline-block"
      >
        {playerNo}
      </div>

      <input
        type="text"
        placeholder="Enter Name"
        value={player.name}
        onChange={(e) => setPlayer({ ...player, name: e.target.value })}
        className="w-full p-3 rounded-xl text-white text-base outline-none focus:ring-2 ring-[#FFCD38] bg-[#1E1B4B] placeholder-white/60"
      />

      {player.category && (
        <p className="mt-4 text-sm bg-gradient-to-r from-[#333] to-[#555] p-2 rounded-md text-center">
          Selected Category:{" "}
          <span className="font-semibold text-yellow-300">
            {player.category.name} {player.category.icon}
          </span>
        </p>
      )}
    </motion.div>
  );
};

export default PlayerCard;

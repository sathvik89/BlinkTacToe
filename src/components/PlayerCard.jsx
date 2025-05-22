import React from "react";
import { motion } from "framer-motion";

const PlayerCard = ({ player, playerNo, color, setPlayer }) => {
  return (
    <motion.div
      className="bg-[#2A2E45] rounded-2xl px-6 py-5 text-white shadow-xl w-full max-w-md mx-auto border border-white/10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="text-lg font-semibold mb-4 px-4 py-2 rounded-md inline-block"
        style={{ backgroundColor: color || "#4F46E5" }}
      >
        {playerNo}
      </div>

      <input
        type="text"
        placeholder="Enter Name"
        value={player.name}
        onChange={(e) => setPlayer({ ...player, name: e.target.value })}
        className="w-full p-3 rounded-xl text-white text-base outline-none focus:ring-2 ring-[#FFCD38]"
      />

      {player.category && (
        <p className="mt-4 text-sm bg-white/10 p-2 rounded-md text-center">
          Selected Category:{" "}
          <span className="font-semibold text-yellow-300">
            {player.category.name}
          </span>
        </p>
      )}
    </motion.div>
  );
};

export default PlayerCard;

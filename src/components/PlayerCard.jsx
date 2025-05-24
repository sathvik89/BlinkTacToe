import React from "react";
import { motion } from "framer-motion";

const PlayerCard = ({ player, playerNo, setPlayer }) => {
  return (
    <motion.div
      className="text-white text-center w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg sm:text-xl font-medium mb-2 text-fuchsia-300">
        {playerNo}
      </h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={player.name}
        onChange={(e) => setPlayer({ ...player, name: e.target.value })}
        className="bg-transparent border-b border-fuchsia-400 text-white placeholder-white/50 px-2 py-1 text-base focus:outline-none focus:border-yellow-300 transition-all duration-300 mb-3 w-full text-center"
      />

      <p className="text-sm sm:text-base text-white/80">
        Category:{" "}
        {player.category ? (
          <span className="text-yellow-300 font-medium">
            {player.category.name} {player.category.icon}
          </span>
        ) : (
          <span className="italic text-white/50">Please select a category</span>
        )}
      </p>
    </motion.div>
  );
};

export default PlayerCard;

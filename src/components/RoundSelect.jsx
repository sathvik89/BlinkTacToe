import React from "react";
import { motion } from "framer-motion";

const RoundSelect = ({ rounds, setRounds, clickSoundRef }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mb-8  p-4 rounded-xl max-w-lg mx-auto"
    >
      <h3 className="text-white font-semibold text-center mb-3">
        Select Number of Rounds
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[1, 3, 5, 7].map((num) => (
          <button
            key={num}
            onClick={() => {
              clickSoundRef.current.currentTime = 0;
              clickSoundRef.current.play();
              setRounds(num);
            }}
            className={`px-4 py-2 rounded-lg transition-all ${
              rounds === num
                ? "bg-yellow-400 text-black font-bold"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {num} {num === 1 ? "Round" : "Rounds"}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default RoundSelect;

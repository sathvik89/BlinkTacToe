import React from "react";
import { motion } from "framer-motion";

const FloatingEmoji = () => {
  const emojiVariants = {
    animate: {
      y: [-10, -14, -10],
      rotate: [-5, 5, -5],
      opacity: [0.2, 0.6, 0.2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 18 + 24}px`,
            opacity: 0.2,
          }}
          variants={emojiVariants}
          animate="animate"
        >
          {["😄", "🎮", "✨", "🦄", "🎲", "🎯", "🚀", "👻", "🌟", "💡"][i % 10]}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingEmoji;

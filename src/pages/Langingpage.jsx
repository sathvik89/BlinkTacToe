import React from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
// import Footer from "../components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      mass: 0.8,
    },
  },
};

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

const LandingPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col justify-center items-center min-h-screen bg-[#0F172A] text-white px-4 py-10 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Floating Emojis */}
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
            {
              ["😄", "🎮", "✨", "🦄", "🎲", "🎯", "🚀", "👻", "🌟", "💡"][
                i % 10
              ]
            }
          </motion.span>
        ))}
      </div>

      <motion.div variants={itemVariants} className="z-10 mt-6 text-center">
        <Heading text="Blink Tac Toe" />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="z-10 mt-4 text-lg sm:text-xl md:text-2xl text-[#FACC15] font-semibold text-center"
      >
        <h2>A fun emoji twist on the classic game!</h2>
      </motion.div>

      <motion.div variants={itemVariants} className="z-10 mt-10">
        <Button pagetonavigate="setup" text="Play Now" />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;

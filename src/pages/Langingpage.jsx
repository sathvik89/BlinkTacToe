import React from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 10,
    },
  },
};

const LandingPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-[#1E90FF] text-white px-6 py-12 overflow-hidden"
    >
      {/* Animated Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-4xl select-none opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 20}px`,
            }}
            animate={{
              y: [-10, -30],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {["😄", "🎮", "✨", "🦄", "🎲", "🎯", "🚀", "👻", "🌟", "💡"][i % 10]}
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <motion.div variants={itemVariants} className="z-10 mt-6 text-center">
        <Heading text="Blink Tac Toe" />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="z-10 mt-6 text-xl md:text-2xl text-[#FFC371] font-semibold text-center"
      >
        <h2>A Fun emoji twist on the classic game!</h2>
      </motion.div>

      <motion.div variants={itemVariants} className="z-10 mt-10">
        <Button pagetonavigate="setup" text="Play Now" />
      </motion.div>

      <motion.div variants={itemVariants} className="z-10 mt-auto w-full">
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
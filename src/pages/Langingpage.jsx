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
      staggerChildren: 0.25,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const LandingPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-purple-200 via-yellow-100 to-pink-200 text-center px-6 py-12 overflow-hidden"
    >
      <motion.div
        variants={itemVariants}
        className="text-5xl font-black text-purple-700 tracking-wide drop-shadow-md"
      >
        <Heading text="Blink Tac Toe" />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-6 text-xl md:text-2xl text-blue-500 font-semibold"
      >
        <h2>A vanishing twist on the classic Tic Tac Toe!</h2>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-10">
        <Button pagetonavigate="setup" text="Play Now" />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-20">
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;

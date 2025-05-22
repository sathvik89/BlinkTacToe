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
      className="flex flex-col justify-center items-center min-h-screen bg-[#2C2C54] text-white px-6 py-12 overflow-hidden"
    >
      <motion.div variants={itemVariants} className="mt-6">
        <Heading text="Blink Tac Toe" />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-19 text-xl md:text-2xl text-[#FFC371] font-semibold"
      >
        <h2>A vanishing twist on the classic Tic Tac Toe!</h2>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-42">
        <motion.div>
          <Button pagetonavigate="setup" text="Play Now" />
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-auto w-full">
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;

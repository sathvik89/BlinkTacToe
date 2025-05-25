import React from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import bgImage from "../backgroundImages/background.png";
import { motion } from "framer-motion";
import FloatingEmoji from "../components/FloatingEmoji";
import {
  containerVariants,
  itemVariants,
} from "../animationsFramer/landingVariants";

const LandingPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-top px-4 md:px-8 py-10 md:py-20 overflow-hidden"
    >
      {/* floating emoji effect in bg */}
      <FloatingEmoji />
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

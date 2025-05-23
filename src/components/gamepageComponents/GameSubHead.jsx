// src/components/gamepageComponents/GameHeader.jsx
import { motion } from "framer-motion";
import Heading from "../Heading";

const GameSubHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-6"
  >
    <Heading text="Blink Tac Toe" />
    <p className="text-[#FFC371] mt-2">The vanishing emoji game!</p>
  </motion.div>
);

export default GameSubHeader;

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import ClickSound from "../audio/Click.mp3";

const RuleBook = () => {
  const clickSound1 = useRef(new Audio(ClickSound));
  const [show, setShow] = useState(false);

  const playClick = () => {
    clickSound1.current.currentTime = 0;
    clickSound1.current.play();
  };

  const Section = ({ number, title, children }) => (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-400 text-white text-xs font-bold">
          {number}
        </div>
        <h3 className="font-semibold text-[#B3BFFA] text-base sm:text-lg">
          {title}
        </h3>
      </div>
      <div className="mt-2 text-sm text-white/90 space-y-1 pl-9">
        {children}
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`${
          show ? "blur-sm pointer-events-none select-none" : ""
        } transition-all duration-300`}
      >
        <button
          onClick={() => {
            playClick();
            setShow(true);
          }}
          className="px-6 py-3 cursor-pointer rounded-xl font-semibold bg-[#6C5CE7] text-white hover:bg-[#8E44AD] hover:scale-105 transition-all shadow-md"
        >
          Show Rules
        </button>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md sm:max-w-lg bg-[#1A1A2E] text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <button
                onClick={() => {
                  playClick();
                  setShow(false);
                }}
                className="absolute top-3 right-3 text-white hover:text-pink-400 transition"
              >
                <RxCross2 size={22} />
              </button>

              <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-5 text-center">
                How to Play Blink Tac Toe
              </h2>

              <Section number="1" title="Game Setup">
                <p>
                  • Each player selects an emoji category (Animals, Food,
                  Sports, etc.)
                </p>
                <p>• The game is played on a classic 3x3 grid</p>
                <p>• Players take turns placing their chosen emojis</p>
              </Section>

              <Section number="2" title="The Vanishing Rule">
                <p>• You can only have 3 emojis on the board at any time</p>
                <p>• Placing a 4th will remove your oldest emoji</p>
                <p>• Adds unpredictability and strategy</p>
              </Section>

              <Section number="3" title="How to Win">
                <p>
                  • Align 3 of your own emojis in a row (horizontal, vertical,
                  or diagonal)
                </p>
                <p>• Only your own emojis count—no mixing!</p>
                <p>• First to succeed wins the game</p>
              </Section>

              <Section number="4" title="Strategy Tips">
                <p>• Think ahead—your oldest emoji won't stay</p>
                <p>• Block your opponent while planning your own moves</p>
                <p>• Use the vanish rule to force creative plays</p>
              </Section>

              <div className="mt-6 sm:mt-8 bg-white/5 text-center p-3 rounded-lg text-sm text-[#B3BFFA]">
                🎮 <strong>Ready to play?</strong> May the best emoji army win!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RuleBook;

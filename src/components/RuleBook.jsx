import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RuleBook = () => {
  const [show, setShow] = useState(false);
  const modalRef = useRef();

  const closeModal = () => setShow(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show]);

  const Section = ({ number, color, title, children }) => (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-xs font-bold ${color}`}
        >
          {number}
        </div>
        <h3 className="font-bold text-lg text-gray-100">{title}</h3>
      </div>
      <div className="mt-2 text-sm text-white/90 space-y-1 pl-9">
        {children}
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`relative transition-all duration-300 ${
          show ? "blur-lg pointer-events-none select-none" : ""
        }`}
      >
        <button
          onClick={() => setShow(true)}
          className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          Show Rules 📘
        </button>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="relative w-full max-w-xl mx-4 p-6 rounded-2xl border border-white/10 bg-white/10 shadow-xl backdrop-blur-xl text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white text-lg hover:text-red-400 transition"
              >
                ❌
              </button>

              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
                How to Play Blink Tac Toe
              </h2>

              <Section number="1" color="bg-blue-500" title="Game Setup">
                <p>
                  • Each player picks an emoji category (Animals, Food, Sports,
                  etc.)
                </p>
                <p>• The game is played on a classic 3x3 grid</p>
                <p>• Players take turns placing their chosen emojis</p>
              </Section>

              <Section
                number="2"
                color="bg-green-500"
                title="The Vanishing Rule"
              >
                <p>• You're only allowed 3 emojis on the board at once</p>
                <p>• Placing a 4th will make your oldest emoji disappear</p>
                <p>• This twist keeps the game active and unpredictable</p>
              </Section>

              <Section number="3" color="bg-orange-500" title="How to Win">
                <p>
                  • Line up 3 of your own emojis in a row—horizontally,
                  vertically, or diagonally
                </p>
                <p>• Only your emojis count—no mixing with the opponent's</p>
                <p>• First to do it takes the win!</p>
              </Section>

              <Section number="4" color="bg-purple-500" title="Strategy Tips">
                <p>• Think ahead—your oldest emoji won't stick around</p>
                <p>• Block your opponent while setting up your own win</p>
                <p>• Use the vanishing rule to force creative plays</p>
              </Section>

              <div className="mt-8 bg-white/10 text-center p-4 rounded-xl text-sm">
                🎮 <strong>Ready to play?</strong> Have fun and may the best
                emoji army win!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RuleBook;

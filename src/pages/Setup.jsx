// import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import EmojiCategory from "../components/EmojiCategory";
import RuleBook from "../components/RuleBook";
import PlayerCard from "../components/PlayerCard";
import Footer from "../components/Footer";
import { PlayerContext } from "../context/PlayerContext";
import { useContext, useState } from "react";

const Setup = () => {
  const navi = useNavigate();
  const [player1, setPlayer1] = useState({ name: "", category: null });
  const [player2, setPlayer2] = useState({ name: "", category: null });

  const [eror, setEror] = useState("");

  const handleSelectCat = (player, category) => {
    if (player === 1) {
      setPlayer1({ ...player1, category });
      setEror(
        player2.category?.name === category.name
          ? "Both players cannot select the same emoji category!"
          : ""
      );
    } else {
      setPlayer2({ ...player2, category });
      setEror(
        player1.category?.name === category.name
          ? "Both players cannot select the same emoji category!"
          : ""
      );
    }
  };

  const canStart =
    player1.name.trim() &&
    player2.name.trim() &&
    player1.category &&
    player2.category &&
    player1.category.name !== player2.category.name;

  const { setPlayer1Context, setPlayer2Context } = useContext(PlayerContext);

  const handleStart = () => {
    if (!player1.name.trim()) return setEror("Player 1 name is required!");
    if (!player2.name.trim()) return setEror("Player 2 name is required!");
    if (!player1.category)
      return setEror("Player 1 must select an emoji category!");
    if (!player2.category)
      return setEror("Player 2 must select an emoji category!");
    if (player1.category.name === player2.category.name)
      return setEror("Both players cannot select the same emoji category!");
    setPlayer1Context(player1);
    setPlayer2Context(player2);
    navi("/gamepage");
  };

  return (
    <div className="relative min-h-screen px-6 py-0 bg-gradient-to-br from-[#1E1B4B] to-[#100F2C] text-white overflow-hidden">
      <div className="py-10">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E7E] via-[#FFCD38] to-[#00D2FF]"
          >
            Setup Your Game 
          </motion.h1>

          {/* Player Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <PlayerCard
              player={player1}
              playerNo={"Player 1"}
              setPlayer={setPlayer1}
              color="#FF5E7E"
            />
            <PlayerCard
              player={player2}
              playerNo={"Player 2"}
              setPlayer={setPlayer2}
              color="#00D2FF"
            />
          </div>

          {/* Emoji Selections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#2B2B60] p-5 rounded-xl border border-pink-400/20 shadow-md hover:shadow-pink-500/30 transition-all duration-300">
              <h2 className="text-xl font-bold mb-4 text-center text-[#FF8FA3] drop-shadow-md">
                🎭 Player 1 Emoji Category
              </h2>
              <EmojiCategory
                player={1}
                whenSelectedCat={(category) => handleSelectCat(1, category)}
              />
            </div>
            <div className="bg-[#2B2B60] p-5 rounded-xl border border-cyan-400/20 shadow-md hover:shadow-cyan-500/30 transition-all duration-300">
              <h2 className="text-xl font-bold mb-4 text-center text-[#7DE4FF] drop-shadow-md">
                🧙‍♂️ Player 2 Emoji Category
              </h2>
              <EmojiCategory
                player={2}
                whenSelectedCat={(category) => handleSelectCat(2, category)}
              />
            </div>
          </div>

          {/* Rulebook */}
          <div className="mb-12">
            <RuleBook />
          </div>

          {/* Error Message */}
          {eror && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-600/20 border border-red-400 text-red-100 rounded-lg text-center font-semibold shadow-inner"
            >
              {eror}
            </motion.div>
          )}

          {/* Start Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={handleStart}
              disabled={!canStart}
              className={`px-10 py-3 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg ${
                canStart
                  ? "bg-gradient-to-r from-[#FF5E7E] to-[#FFC371] hover:scale-105 hover:shadow-pink-300"
                  : "bg-gray-600 cursor-not-allowed opacity-60"
              }`}
            >
              🚀 Start Game!
            </button>
          </motion.div>
        </div>
      </div>

      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Setup;

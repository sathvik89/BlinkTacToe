import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import EmojiCategory from "../components/EmojiCategory";
import RuleBook from "../components/RuleBook";
import PlayerCard from "../components/PlayerCard";
import { PlayerContext } from "../context/PlayerContext";

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

  const {setPlayer1Context,setPlayer2Context } =
    useContext(PlayerContext);

  const handleStart = () => {
    if (!player1.name.trim()) {
      return setEror("Player 1 name is required!");
    }
    if (!player2.name.trim()) {
      return setEror("Player 2 name is required!");
    }
    if (!player1.category) {
      return setEror("Player 1 must select an emoji category!");
    }
    if (!player2.category) {
      return setEror("Player 2 must select an emoji category!");
    }
    if (player1.category.name === player2.category.name) {
      return setEror("Both players cannot select the same emoji category!");
    }
    setPlayer1Context(player1);
    setPlayer2Context(player2);
    navi("/gamepage");
  };

  return (
    <div className="relative min-h-screen px-6 py-10 bg-[#1E1B4B] text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#FFCD38]"
        >
          Setup Your Game
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className=" bg-[#1F1F3A] py-2">
            <h2 className="text-lg font-semibold mb-2 text-center text-[#FFC371]">
              Player 1 Emoji Category
            </h2>
            <EmojiCategory
              player={1}
              whenSelectedCat={(category) => handleSelectCat(1, category)}
            />
          </div>
          <div className=" bg-[#1F1F3A] py-2">
            <h2 className="text-lg font-semibold mb-2 text-center text-[#FFC371]">
              Player 2 Emoji Category
            </h2>
            <EmojiCategory
              player={2}
              whenSelectedCat={(category) => handleSelectCat(2, category)}
            />
          </div>
        </div>

        <div className="mb-10">
          <RuleBook />
        </div>

        {eror && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-500/20 border border-red-500 text-white rounded-lg text-center font-medium"
          >
            {eror}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={handleStart}
            disabled={!canStart}
            className={`px-10 py-3 rounded-xl font-bold text-lg shadow-md transition-all duration-300 ${
              canStart
                ? "bg-[#FF5E7E] hover:shadow-xl hover:scale-105"
                : "bg-gray-500 cursor-not-allowed opacity-60"
            }`}
          >
            Start Game! 🎮
          </button>
        </motion.div>
      </div>
    </div>
  );
};
export default Setup;

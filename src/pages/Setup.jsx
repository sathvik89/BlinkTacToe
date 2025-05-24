import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import EmojiCategory from "../components/EmojiCategory";
import RuleBook from "../components/RuleBook";
import PlayerCard from "../components/PlayerCard";
import Footer from "../components/Footer";
import { PlayerContext } from "../context/PlayerContext";
import { useContext, useState, useRef, useEffect } from "react";
import BackButton from "../components/BackButton";
import bgImage from "../backgroundImages/background.png";

const Setup = () => {
  const navi = useNavigate();
  const [player1, setPlayer1] = useState({ name: "", category: null });
  const [player2, setPlayer2] = useState({ name: "", category: null });
  const [eror, setEror] = useState("");

  const emojiSectionRef = useRef(null);
  const scrollToEmojis = () => {
    emojiSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timeout = setTimeout(scrollToEmojis, 2000);
    return () => clearTimeout(timeout);
  }, []);

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
    player1.name &&
    player2.name &&
    player1.category &&
    player2.category &&
    player1.category.name !== player2.category.name;

  const { setPlayer1Context, setPlayer2Context } = useContext(PlayerContext);

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
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative min-h-screen bg-cover bg-top px-4 md:px-8 py-10 md:py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl  font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E7E] via-[#FFCD38] to-[#00D2FF] drop-shadow-lg"
        >
          Setup Your Game
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <PlayerCard
            player={player1}
            playerNo="Player 1"
            setPlayer={setPlayer1}
            color="#FF5E7E"
          />
          <PlayerCard
            player={player2}
            playerNo="Player 2"
            setPlayer={setPlayer2}
            color="#00D2FF"
          />
        </motion.div>

        <motion.div
          ref={emojiSectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-[#2B2B60] p-6 rounded-2xl border border-pink-400/30 shadow-md hover:shadow-pink-500/30 transition-all duration-300">
            <h2 className="text-xl font-bold mb-4 text-center text-[#FF8FA3] drop-shadow-md">
              Player 1 Emoji Category
            </h2>
            <EmojiCategory
              player={1}
              whenSelectedCat={(category) => handleSelectCat(1, category)}
            />
          </div>
          <div className="bg-[#2B2B60] p-6 rounded-2xl border border-cyan-400/30 shadow-md hover:shadow-cyan-500/30 transition-all duration-300">
            <h2 className="text-xl font-bold mb-4 text-center text-[#7DE4FF] drop-shadow-md">
              Player 2 Emoji Category
            </h2>
            <EmojiCategory
              player={2}
              whenSelectedCat={(category) => handleSelectCat(2, category)}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <RuleBook />
        </motion.div>

        {eror && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-600/20 border border-red-400 text-red-100 rounded-lg text-center font-semibold shadow-inner"
          >
            {eror}
          </motion.div>
        )}

        <div className="mt-6">
          <BackButton />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={handleStart}
            disabled={!canStart}
            className={`px-10 py-3 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg tracking-wide ${
              canStart
                ? "bg-emerald-400 hover:scale-105 cursor-pointer"
                : "bg-gray-600 cursor-not-allowed opacity-60"
            }`}
          >
            Start Game!
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-24"
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Setup;

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState, useRef } from "react";
import EmojiCategory from "../components/EmojiCategory";
import RuleBook from "../components/RuleBook";
import PlayerCard from "../components/PlayerCard";
import Footer from "../components/Footer";
import AppMusic from "../components/AppMusic";
import bgImage from "../backgroundImages/background.png";
import FloatingEmoji from "../components/FloatingEmoji";
import StartButton from "../components/StartButton";
import ClickSound from "../audio/Click.mp3";
import SetupHeading from "../components/SetupHeading";
import HomeButton from "../components/HomeButton";
import RoundSelect from "../components/RoundSelect";
import { PlayerContext } from "../context/PlayerContext";

const Setup = () => {
  const navi = useNavigate();

  const [player1, setPlayer1] = useState({ name: "", category: null });
  const [player2, setPlayer2] = useState({ name: "", category: null });
  const [eror, setEror] = useState("");
  const [rounds, setRounds] = useState(1);

  const clickSound1 = useRef(new Audio(ClickSound));

  const {
    setPlayer1Context,
    setPlayer2Context,
    setRounds: setTotalRounds,
  } = useContext(PlayerContext);

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

  const handleStart = () => {
    clickSound1.current.currentTime = 0;
    clickSound1.current.play();

    if (!player1.name) {
      return setEror("Please enter Player 1's name.");
    }
    if (!player2.name) {
      return setEror("Please enter Player 2's name.");
    }
    if (!player1.category) {
      return setEror("Player 1, please select an emoji category.");
    }

    if (!player2.category) {
      return setEror("Player 2, please select an emoji category.");
    }

    if (player1.category.name === player2.category.name) {
      return setEror("Both players cannot choose the same emoji category.");
    }

    // saving the data to global context
    setPlayer1Context(player1);
    setPlayer2Context(player2);
    setTotalRounds(rounds);
    navi("/gamepage");
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative min-h-screen bg-cover bg-top px-4 md:px-8 py-10 md:py-20 overflow-hidden"
    >
      <div className="mb-10">
        <HomeButton />
        <AppMusic />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SetupHeading />
        <FloatingEmoji />
        {/* player cards (Eg: enter name ) */}
        <div className="flex flex-col justify-center">
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

          {/* no of rounds */}
          <RoundSelect
            rounds={rounds}
            setRounds={setRounds}
            clickSoundRef={clickSound1}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-white text-center text-lg font-semibold my-6 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full w-max mx-auto select-none"
          >
            Choose your emoji sets
          </motion.div>

          {/* emoji category  */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {[1, 2].map((player) => {
              const isPlayer1 = player === 1;
              return (
                <section
                  key={player}
                  className={`bg-[#2B2B60] p-6 rounded-2xl border ${
                    isPlayer1
                      ? "border-pink-400/30 shadow-md hover:shadow-pink-500/30"
                      : "border-cyan-400/30 shadow-md hover:shadow-cyan-500/30"
                  } transition-all duration-300`}
                >
                  <h2
                    className={`text-xl font-bold mb-4 text-center ${
                      isPlayer1 ? "text-[#FF8FA3]" : "text-[#7DE4FF]"
                    } drop-shadow-md`}
                  >
                    Player {player} Emoji Category
                  </h2>
                  <EmojiCategory
                    player={player}
                    whenSelectedCat={(category) =>
                      handleSelectCat(player, category)
                    }
                  />
                </section>
              );
            })}
          </motion.div>

          {/* error message display */}
          {eror && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-600/20 border border-red-400 text-red-100 rounded-lg text-center font-semibold shadow-inner"
            >
              {eror}
            </motion.div>
          )}

          {/* RuleBook and Start */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <RuleBook />
            <StartButton onClick={handleStart} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-24"
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Setup;

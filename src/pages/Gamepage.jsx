import { motion } from "framer-motion";
import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import Confetti from "../components/gamepageComponents/Confetti";
import GameSubHead from "../components/gamepageComponents/GameSubHead";
import PlayerBadge from "../components/gamepageComponents/PlayerBadge";
import PlayerTurnIndicator from "../components/gamepageComponents/PlayerTurnIndicator";
import { checkWinner } from "../utils/IsWinner";
import Board from "../components/gamepageComponents/Board";
import GameControls from "../components/gamepageComponents/GameControls";
import Footer from "../components/Footer";
import bgImage from "../backgroundImages/background.png";
import clickSound from "../audio/Click.mp3";
import AppMusic from "../components/AppMusic";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  }),
};

const Gamepage = () => {
  const clickSound1 = useRef(new Audio(clickSound));
  const { player1, player2, currentEmojisetToPlace, resetEmojiSet } =
    useContext(PlayerContext);
  const navi = useNavigate();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(
    Math.floor(Math.random() * 2) + 1
  );
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!player1?.category || !player2?.category) {
      navi("/setup");
    }
  }, [player1, player2, navi]);

  //cell logic
  const handleCellClick = (index) => {
    clickSound1.current.currentTime = 0;
    clickSound1.current.play();

    if (winner || board[index] !== null) return null;

    const newBoard = [...board];
    const isPlayer1Turn = currentTurn === 1;
    const playerMoves = isPlayer1Turn ? player1Moves : player2Moves;
    const setPlayerMoves = isPlayer1Turn ? setPlayer1Moves : setPlayer2Moves;
    const currentEmoji = currentEmojisetToPlace[currentTurn];

    const newMove = {
      emoji: currentEmoji,
      position: index,
      timestamp: Date.now(),
      player: currentTurn,
    };

    let updatedMoves;
    if (playerMoves.length >= 3) {
      const sortedMoves = [...playerMoves].sort(
        (a, b) => a.timestamp - b.timestamp
      );
      const oldestMove = sortedMoves[0];
      newBoard[oldestMove.position] = null;
      updatedMoves = [...playerMoves.slice(1), newMove];
    } else {
      updatedMoves = [...playerMoves, newMove];
    }

    newBoard[index] = newMove;
    setBoard(newBoard);
    setPlayerMoves(updatedMoves);

    const result = checkWinner(updatedMoves);
    if (result.isWinner) {
      setWinner(currentTurn);
      setWinningCells(result.winningIndices);
      setShowConfetti(true);
      return;
    } else {
      setCurrentTurn(currentTurn === 1 ? 2 : 1);
      resetEmojiSet();
    }
  };
  //cell logic ends here //

  function handleResetGame() {
    clickSound1.current.currentTime = 0;
    clickSound1.current.play();
    setBoard(Array(9).fill(null));
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    setWinner(null);
    setWinningCells([]);
    setCurrentTurn(1);
    setShowConfetti(false);
    resetEmojiSet();
  }
  if (!player1 || !player2) {
    return null;
  }

  return (
    <motion.div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative min-h-screen bg-cover bg-top px-4 md:px-8 py-10 md:py-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <AppMusic />
      {showConfetti && <Confetti />}
      <div className="flex-1 p-4 md:p-8">
        <motion.div className="max-w-4xl mx-auto" variants={fadeUp}>
          <motion.div variants={fadeUp}>
            <GameSubHead />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
            variants={fadeUp}
          >
            <PlayerBadge
              player={player1}
              isActive={currentTurn === 1 && !winner}
            />

            <motion.div variants={fadeUp}>
              <PlayerTurnIndicator
                winner={winner}
                currentPlayer={currentTurn}
                player1={player1}
                player2={player2}
                currentEmoji={currentEmojisetToPlace[currentTurn]}
              />
            </motion.div>

            <PlayerBadge
              player={player2}
              isActive={currentTurn === 2 && !winner}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Board
              board={board}
              handleClick={handleCellClick}
              winner={winner}
              winningIndices={winningCells}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <GameControls
              handleReset={handleResetGame}
              handleChangePlayers={() => {
                clickSound1.current.currentTime = 0;
                clickSound1.current.play();
                navi("/setup");
              }}
              isWin={winner}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 mb-8 text-center text-sm text-yellow-300"
          >
            <p>Remember: You can only have 3 emojis on the board at once!</p>
            <p>When you place a 4th emoji, your oldest one will vanish.</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gamepage;

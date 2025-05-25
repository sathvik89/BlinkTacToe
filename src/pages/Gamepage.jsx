import { motion } from "framer-motion";
import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

// context and utility functions imports
import { PlayerContext } from "../context/PlayerContext";
import { checkWinner } from "../utils/IsWinner";
import { updateMovesWithLimit } from "../utils/updateMovesWithLimit";
import { fadeUp } from "../animationsFramer/GamePageVariants";

// components imports
import AppMusic from "../components/AppMusic";
import HomeButton from "../components/HomeButton";
import Confetti from "../components/gamepageComponents/Confetti";
import GameSubHead from "../components/gamepageComponents/GameSubHead";
import PlayerBadge from "../components/gamepageComponents/PlayerBadge";
import PlayerTurnIndicator from "../components/gamepageComponents/PlayerTurnIndicator";
import Board from "../components/gamepageComponents/Board";
import GameControls from "../components/gamepageComponents/GameControls";
import Footer from "../components/Footer";

// audio backgrounds imports
import clickSound from "../audio/Click.mp3";
import winnerSound from "../audio/winner.mp3";
import bgImage from "../backgroundImages/background.png";

const Gamepage = () => {
  const clickSound1 = useRef(new Audio(clickSound));
  const winnerMusicc = useRef(new Audio(winnerSound));
  const navi = useNavigate();

  // context
  const { player1, player2, currentEmojisetToPlace, resetEmojiSet } =
    useContext(PlayerContext);

  //game states
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(
    Math.floor(Math.random() * 2) + 1
  );
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  //redirect to setup if players category not set
  useEffect(() => {
    if (!player1?.category || !player2?.category) {
      navi("/setup");
    }
  }, [player1, player2, navi]);

  // cell Logic Starts
  const handleCellClick = (index) => {
    clickSound1.current.currentTime = 0;
    clickSound1.current.play();

    // if a winner is declared or the cell is already filled (not null), do nothing
    if (winner || board[index] !== null) return null;

    const newBoard = [...board]; // temporary board — later we’ll update the actual board
    const isPlayer1Turn = currentTurn === 1; // check whose turn it is
    const playerMoves = isPlayer1Turn ? player1Moves : player2Moves;
    const setPlayerMoves = isPlayer1Turn ? setPlayer1Moves : setPlayer2Moves;
    const currentEmoji = currentEmojisetToPlace[currentTurn]; // from context currentEmojisetToPlace = { 1: emoji1, 2: emoji2 }

    const newMove = {
      emoji: currentEmoji,
      position: index,
      timestamp: Date.now(), // adding timestamp to track which move is oldest , this helps us remove the oldest when placing a 4th emoji
      player: currentTurn,
    };

    const updatedMoves = updateMovesWithLimit(playerMoves, newMove, newBoard);
    newBoard[index] = newMove;
    setBoard(newBoard);
    setPlayerMoves(updatedMoves);

    const result = checkWinner(updatedMoves); // check if the updated moves form a winning combination or not
    if (result.isWinner) {
      setWinner(currentTurn);
      setWinningCells(result.winningIndices);
      setShowConfetti(true);
      return;
    } else {
      setCurrentTurn(currentTurn === 1 ? 2 : 1);
      resetEmojiSet(); // resetting the emoji after every move
    }
  };
  //cell Logic ends here

  // reset everything to initial states
  const handleResetGame = () => {
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
  };

  //if theres a winner play winner sound for 5sec
  useEffect(() => {
    if (winner) {
      winnerMusicc.current.currentTime = 0;
      winnerMusicc.current.play();
      const id = setTimeout(() => {
        winnerMusicc.current.pause();
      }, 5000);
      return () => clearTimeout(id);
    }
  }, [winner]);

  if (!player1 || !player2) return null;

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
      <div className="mb-10">
        <AppMusic />
        <HomeButton />
      </div>

      {showConfetti && <Confetti />}

      <div className="flex-1 p-4 md:p-8">
        <motion.div className="max-w-4xl mx-auto" variants={fadeUp}>
          <motion.div variants={fadeUp}>
            <GameSubHead />
          </motion.div>

          {/* player badge1 - player turn indicator - player badge2 */}
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

          {/* board */}
          <motion.div variants={fadeUp}>
            <Board
              board={board}
              handleClick={handleCellClick}
              winner={winner}
              winningIndices={winningCells}
            />
          </motion.div>

          {/* game controls */}
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

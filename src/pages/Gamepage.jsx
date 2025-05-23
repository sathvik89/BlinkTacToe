import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import Confetti from "../components/gamepageComponents/Confetti";
import GameSubHead from "../components/gamepageComponents/GameSubHead";
import PlayerBadge from "../components/gamepageComponents/PlayerBadge";
import PlayerTurnIndicator from "../components/gamepageComponents/PlayerTurnIndicator";
import { checkWinner } from "../utils/IsWinner";
import Board from "../components/gamepageComponents/Board";

const Gamepage = () => {
  const { player1, player2, currentEmojisetToPlace, resetEmojiSet } =
    useContext(PlayerContext);

  const navi = useNavigate();

  // game state
  const [board, setBoard] = useState(Array(9).fill(null)); //simplified
  const [currentTurn, setCurrentTurn] = useState(1); // 1 = player1, 2 = player2
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  // redirect if setup isn't complete/ when refresh error might come
  useEffect(() => {
    if (!player1?.category || !player2?.category) {
      navi("/setup");
    }
  }, [player1, player2, navi]);

  //cell logic
  const handleCellClick = (index) => {
    if (winner || board[index] !== null) {
      return;
    }

    const newBoard = [...board];
    const isPlayer1Turn = currentTurn === 1;
    const playerMoves = isPlayer1Turn ? player1Moves : player2Moves;
    const setPlayerMoves = isPlayer1Turn ? setPlayer1Moves : setPlayer2Moves;
    const currentEmoji = currentEmojisetToPlace[currentTurn];

    const newMove = {
      emoji: currentEmoji,
      position: index,
      timestamp: Date.now(), //storing the time so that we cna later compare
      player: currentTurn,
    };

    // vanishinng rule
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

    // Check if win
    const result = checkWinner(updatedMoves);
    
    if (result.isWinner) {
      setWinner(currentTurn);
      setWinningCells(result.winningIndices);
      setShowConfetti(true);
      return;
    } else {
      setCurrentTurn(currentTurn === 1 ? 2 : 1);
      resetEmojiSet(); // new_emoji for next move
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2C2C54] to-[#1F1F3A] text-white flex flex-col">
      {showConfetti && <Confetti />}
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <GameSubHead />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <PlayerBadge
              player={player1}
              isActive={currentTurn === 1 && !winner}
            />
            <PlayerTurnIndicator
              winner={winner}
              currentPlayer={currentTurn}
              player1={player1}
              player2={player2}
              currentEmoji={currentEmojisetToPlace[currentTurn]}
            />
            <PlayerBadge
              player={player2}
              isActive={currentTurn === 2 && !winner}
            />
          </div>
          <Board
            board={board}
            handleClick={handleCellClick}
            winner={winner}
            winningIndices={winningCells}
          />
        </div>
      </div>
    </div>
  );
};

export default Gamepage;

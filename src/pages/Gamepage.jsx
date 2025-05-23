import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import Confetti from "../components/gamepageComponents/Confetti";
const Gamepage = () => {
  const { player1, player2, emojiSet, resetEmojiSet } = useContext(PlayerContext);

  const navi = useNavigate();

  // game state
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [currentPlayer, setCurrentPlayer] = useState(1); //starting with player 1

  const [winner, setWinner] = useState(null);

  // redirect if setup isn't complete/ when refresh error might come
  useEffect(() => {
    if (!player1?.category || !player2?.category) {
      navi("/setup");
    }
  }, [player1, player2, navi]);

  const [showConfetti, setShowConfetti] = useState(false);



  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2C2C54] to-[#1F1F3A] text-white flex flex-col">
      <div className="flex-1 p-4 md:p-8">
        {showConfetti && <Confetti />}
        <div className="max-w-4xl mx-auto">Game will go here</div>
      </div>
    </div>
  );
};

export default Gamepage;

// context/PlayerContext.js
import React, { createContext, useState, useEffect } from "react";
import { getRandomEmoji } from "../utils/randomEmojiUtils";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  // Player details
  const [player1, setPlayer1Context] = useState(null);
  const [player2, setPlayer2Context] = useState(null);

  // Game state
  const [currentEmojisetToPlace, setcurrentEmojisetToPlace] = useState({
    1: null,
    2: null,
  });
  const [scores, setScores] = useState({ 1: 0, 2: 0 }); // Track scores
  const [rounds, setRounds] = useState(1); // Total rounds
  const [currentRound, setCurrentRound] = useState(1); // Current round number

  // Assign random emojis
  const assignEmojis = () => {
    if (player1 && player2) {
      const e1 = getRandomEmoji(player1.category.name);
      const e2 = getRandomEmoji(player2.category.name);
      setcurrentEmojisetToPlace({ 1: e1, 2: e2 });
    }
  };

  useEffect(() => {
    if (player1 && player2) {
      assignEmojis();
    }
  }, [player1, player2]);

  // Reset emojis after each turn
  const resetEmojiSet = () => {
    assignEmojis();
  };

  // Update score when a player wins
  const incrementScore = (player) => {
    setScores((prev) => ({ ...prev, [player]: prev[player] + 1 }));
  };

  // Move to next round
  const nextRound = () => {
    setCurrentRound((prev) => prev + 1);
  };

  // Reset entire game
  const resetGame = () => {
    setScores({ 1: 0, 2: 0 });
    setCurrentRound(1);
  };

  return (
    <PlayerContext.Provider
      value={{
        player1,
        setPlayer1Context,
        player2,
        setPlayer2Context,
        currentEmojisetToPlace,
        resetEmojiSet,
        scores,
        incrementScore,
        rounds,
        setRounds,
        currentRound,
        nextRound,
        resetGame,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

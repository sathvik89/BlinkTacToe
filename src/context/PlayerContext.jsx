import React, { createContext, useState, useEffect } from "react";
import { getRandomEmoji } from "../utils/randomEmojiUtils";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [player1, setPlayer1Context] = useState(null);
  const [player2, setPlayer2Context] = useState(null);
  const [currentEmojisetToPlace, setcurrentEmojisetToPlace] = useState({
    1: null,
    2: null,
  });

  const assignEmojis = () => {
    const e1 = getRandomEmoji(player1.category.name);
    const e2 = getRandomEmoji(player2.category.name);
    setcurrentEmojisetToPlace({ 1: e1, 2: e2 });
  };

  useEffect(() => {
    if (player1 && player2) {
      assignEmojis();
    }
  }, [player1, player2]);

  const resetEmojiSet = () => {
    if (player1 && player2) {
      assignEmojis();
    }
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
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

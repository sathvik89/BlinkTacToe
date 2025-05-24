import React, { createContext, useState, useEffect } from "react";
import { getRandomEmoji } from "../utils/randomEmojiUtils";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  // player details like name
  const [player1, setPlayer1Context] = useState(null);
  const [player2, setPlayer2Context] = useState(null);

  // curr assigned emojis to place on the board for player 1 and 2
  const [currentEmojisetToPlace, setcurrentEmojisetToPlace] = useState({
    1: null,
    2: null,
  });

  // assigns random emoji extracted from that "getRandomEmoji" function based on selected category
  const assignEmojis = () => {
    const e1 = getRandomEmoji(player1.category.name);
    const e2 = getRandomEmoji(player2.category.name);
    setcurrentEmojisetToPlace({ 1: e1, 2: e2 });
  };

  useEffect(() => {
    if (player1 && player2) {
      assignEmojis();
    }
  }, [player1, player2]); // assigns emoji after players are set

  const resetEmojiSet = () => {
    // reset emoji after every turn
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

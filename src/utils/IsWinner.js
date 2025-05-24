// Checks if a player has won the game based on their placed emoji positions
export const checkWinner = (playerEmojis) => {
  // All possible winning combinations rowwise column wise diagnols
  const possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // extracting the board positions where the player has placed emojis as an array
  const placed = playerEmojis.map((item) => item.position);

  // checking if any winning pattern is completely matched by the player
  for (const pattern of possibleWins) {
    const [a, b, c] = pattern;
    if (placed.includes(a) && placed.includes(b) && placed.includes(c)) {
      return {
        isWinner: true,
        winningIndices: pattern,
      };
    }
  }
  return {
    isWinner: false,
    winningIndices: [],
  };
};

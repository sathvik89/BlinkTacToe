export const checkWinner = (playerEmojis) => {
  //these rows or columns are where the winner will be !
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

  for (const pattern of possibleWins) {
    const [a, b, c] = pattern;
    const p = playerEmojis.map((item) => item.position);

    if (p.includes(a) && p.includes(b) && p.includes(c)) {
      return { isWinner: true, winningIndices: pattern };
    }
  }
  return { isWinner: false, winningIndices: [] };
};

export const updateMovesWithLimit = (playerMoves, newMove, board) => {
  if (playerMoves.length >= 3) {
    const sortedMoves = [...playerMoves].sort(
      (a, b) => a.timestamp - b.timestamp
    );
    const oldestMove = sortedMoves[0];
    board[oldestMove.position] = null;
    return [...playerMoves.slice(1), newMove];
  }
  return [...playerMoves, newMove];
};

import React from "react";

const GameControls = ({
  handleReset,
  handleChangePlayers,
  isWin,
  gameCompleted,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={handleChangePlayers}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
      >
        Change Players
      </button>

      <button
        onClick={handleReset}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        {gameCompleted ? "Play Again" : isWin ? "Next Round" : "Reset Game"}
      </button>
    </div>
  );
};

export default GameControls;

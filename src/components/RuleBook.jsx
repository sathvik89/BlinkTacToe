import React, { useState } from "react";

const RuleBook = () => {
  const [show, setShow] = useState(false);

  function handleRule() {
    setShow((prev) => !prev);
  }

  return (
    <div className="mt-4">
      <button
        onClick={handleRule}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {show ? "Hide Rules" : "Show Rules"}
      </button>

      {show && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md bg-white shadow-sm">
          <h3 className="font-bold text-lg mb-2">Blink Tac Toe - Rules</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Select your emoji category and choose a unique emoji for each
              player.
            </li>
            <li>Players take turns placing their emoji on the 3x3 grid.</li>
            <li>
              <strong>Vanishing Rule:</strong> Each player can only have 3
              emojis on the board at a time.
            </li>
            <li>
              When placing a 4th emoji, the oldest one disappears automatically.
            </li>
            <li>
              The first player to get 3 emojis in a row (horizontal, vertical,
              or diagonal) wins!
            </li>
            <li>
              Draws are not possible since the board never fills completely.
            </li>
          </ul>

          <h3 className="font-bold text-lg mt-4 mb-2">Strategy Tips</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Plan ahead: Your oldest emoji will vanish when placing a new one.
            </li>
            <li>Try to block your opponent's potential lines.</li>
            <li>The center cell is valuable — control it if you can.</li>
            <li>
              Sometimes removing your own older emoji strategically can help
              reset the board in your favor.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RuleBook;

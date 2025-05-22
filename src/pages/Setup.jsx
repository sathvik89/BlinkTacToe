import React from "react";
import EmojiCategory from "../components/EmojiCategory";
import RuleBook from "../components/RuleBook";

const Setup = () => {
  return (
    <div className="bg-amber-200">
      This is the Setup
      <EmojiCategory />
      <div>
        <div>
          Player 1: <input type="text" placeholder="Name of Player1" />
        </div>
        <div>
          Player 2: <input type="text" placeholder="Name of Player2" />
        </div>
      </div>
      <div>player1 - selected Emoji category:</div>
      <div>player2 - selected Emoji category:</div>
      <div>
        <RuleBook />
      </div>
      <EmojiCategory />
      ok
    </div>
  );
};

export default Setup;

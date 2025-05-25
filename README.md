# Blink Tac Toe

A playful, emoji-powered twist on classic Tic Tac Toe – built with React, featuring animations, sound feedback, emoji categories, and multi-round gameplay.

---

## ⚙️ Tech Stack

- **React.js** (with Hooks and Context API for global state)
- **Tailwind CSS** for styling
- **Framer Motion** for animations


---

## 😍 Emoji Categories

Players can choose from the following emoji categories:

- **Faces**: 😄 😂 😍 😎 😢 😭 😴 🤓
- **Animals**: 🐶 🐱 🦊 🐵 🦁 🐯 🐻 🐰 🐭 🐼 🐸 🐧
- **Adventure**: 🧙 🧝 🏹 🗡️ 🧛 🧟 🧞 🧜 🧚 🧗 🗺️
- **Games**: 🎮 🕹️ 🎲 ♟️ 🧩 🃏 🎯 🎳 🎰 ⚽ 🏀
- **Fantasy**: 🐉 🦄 👾 🤖 👻 🎃 🪄 🔮 🫧
- **Food**: 🍕 🍔 🍟 🌭 🥪 🌮 🌯 🥙 🍳 🥘 🍲
- **Nature**: 🌿 🌳 🌻 🌼 🌱 🌾 🌵 🍀 🍃 🍂
- **Weather**: ☀️ 🌤️ ⛅ 🌦️ 🌧️ ⛈️ 🌨️ ❄️ 💨 🌪️ 🌈
- **Space**: 🌍 🌎 🌏 🌕 🌑 🌌 🚀 🛸 🌠 🪐
- **Objects**: 💡 📷 📱 💻 ⏰ 🕰️ 🧭 🔋 🪞 📦

---

## ✨ Vanishing Feature (Move Limit)

To implement the vanishing feature, that each player can only have up to 3 emojis on the board at a time. When a player makes a move beyond this limit, the oldest move they made automatically disappears.

## How I Achieved This 

- Store each move along with a **timestamp** that records the exact time the move was made.
- Whenever a new move is added, check if the player already has **3 moves** on the board.
- If yes, **sort** the player's moves by their timestamps to find the **oldest move**.
- Remove the oldest move from the board by setting that board position to `null`.
- Finally, add the new move to the player's moves list.

This approach ensures the board remains clean, showing only the most recent 3 moves per player, creating a smooth and engaging gameplay experience.

### JavaScript Code

```js
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
```

---

##  Highlights and Extras

I went beyond the basic requirements by adding:

-  Three page app • Landingpage • Setuppage •Gamepage
-  Confetti animation on win  
-  Distinct win sounds and button click feedback  
-  Floating emoji background animation on Setup page  
-  Clean UI buttons with intuitive icons (Home, Audio Toggle, etc.)  


---

##  What I’d Improve with More Time

-  Add a "Random Emoji" button to quickly assign random categories to players
-  Implement a toast/notification system (e.g., Sonner)
-  Allow players to change emoji categories between rounds
-  Add a Dark Mode toggle
-  Enable export/share of final game results via screenshot or link

---

**Thanks for the opportunity to build something like BlinkTacToe — I'm excited to hear your feedback!**
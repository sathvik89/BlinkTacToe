// List of emoji categories used for assigning random emojis to players
// after they select a category during setup. Each category has a name and a set of related emojis.

const emojiList = [
  {
    name: "Faces",
    emojis: ["😄", "😂", "😍", "😎", "😢", "😭", "😴", "🤓"],
  },
  {
    name: "Animals",
    emojis: [
      "🐶",
      "🐱",
      "🦊",
      "🐵",
      "🦁",
      "🐯",
      "🐻",
      "🐰",
      "🐭",
      "🐼",
      "🐸",
      "🐧",
    ],
  },
  {
    name: "Adventure",
    emojis: ["🧙", "🧝", "🏹", "🗡️", "🧛", "🧟", "🧞", "🧜", "🧚", "🧗", "🗺️"],
  },
  {
    name: "Games",
    emojis: ["🎮", "🕹️", "🎲", "♟️", "🧩", "🃏", "🎯", "🎳", "🎰", "⚽", "🏀"],
  },
  {
    name: "Fantasy",
    emojis: ["🐉", "🦄", "👾", "🤖", "👻", "🎃", "🪄", "🔮", "🫧"],
  },
  {
    name: "Food",
    emojis: ["🍕", "🍔", "🍟", "🌭", "🥪", "🌮", "🌯", "🥙", "🍳", "🥘", "🍲"],
  },
  {
    name: "Nature",
    emojis: ["🌿", "🌳", "🌻", "🌼", "🌱", "🌾", "🌵", "🍀", "🍃", "🍂"],
  },
  {
    name: "Weather",
    emojis: ["☀️", "🌤️", "⛅", "🌦️", "🌧️", "⛈️", "🌨️", "❄️", "💨", "🌪️", "🌈"],
  },
  {
    name: "Space",
    emojis: ["🌍", "🌎", "🌏", "🌕", "🌑", "🌌", "🚀", "🛸", "🌠", "🪐"],
  },
  {
    name: "Objects",
    emojis: ["💡", "📷", "📱", "💻", "⏰", "🕰️", "🧭", "🔋", "🪞", "📦"],
  },
];

export default emojiList;

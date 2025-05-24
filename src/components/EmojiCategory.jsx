import { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const emojiCategories = [
  {
    name: "Faces",
    icon: "😄",
    emojis: ["😄", "😂", "😍", "😎", "😢", "😭", "😴", "🤓"],
  },
  {
    name: "Animals",
    icon: "🐶",
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
    icon: "🧙",
    emojis: ["🧙", "🧝", "🏹", "🗡️", "🧛", "🧟", "🧞", "🧜", "🧚", "🧗", "🗺️"],
  },
  {
    name: "Games",
    icon: "🎮",
    emojis: ["🎮", "🕹️", "🎲", "♟️", "🧩", "🃏", "🎯", "🎳", "🎰", "⚽", "🏀"],
  },
  {
    name: "Fantasy",
    icon: "🐉",
    emojis: ["🐉", "🦄", "👾", "🤖", "👻", "🎃", "🪄", "🔮", "🫧"],
  },
  {
    name: "Food",
    icon: "🍕",
    emojis: ["🍕", "🍔", "🍟", "🌭", "🥪", "🌮", "🌯", "🥙", "🍳", "🥘", "🍲"],
  },
  {
    name: "Nature",
    icon: "🌿",
    emojis: ["🌿", "🌳", "🌻", "🌼", "🌱", "🌾", "🌵", "🍀", "🍃", "🍂"],
  },
  {
    name: "Weather",
    icon: "☀️",
    emojis: ["☀️", "🌤️", "⛅", "🌦️", "🌧️", "⛈️", "🌨️", "❄️", "💨", "🌪️", "🌈"],
  },
  {
    name: "Space",
    icon: "🪐",
    emojis: ["🌍", "🌎", "🌏", "🌕", "🌑", "🌌", "🚀", "🛸", "🌠", "🪐"],
  },
  {
    name: "Objects",
    icon: "💡",
    emojis: ["💡", "📷", "📱", "💻", "⏰", "🕰️", "🧭", "🔋", "🪞", "📦"],
  },
];

const EmojiCategory = ({ whenSelectedCat }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const scrollRef = useRef(null);
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!scrollRef.current) return;
    x.current += delta * 0.04;
    if (x.current >= scrollRef.current.scrollWidth / 2) x.current = 0;
    scrollRef.current.style.transform = `translateX(-${x.current}px)`;
  });

  const scrollItems = [...emojiCategories, ...emojiCategories];

  const handleSelect = (cat) => {
    setSelectedCategory(cat);
    if (whenSelectedCat) whenSelectedCat(cat);
  };

  const clickTap = { scale: 0.9, rotate: -5 };

  return (
    <div className="w-full py-2 px-3 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center gap-5">
      {/* Scrolling categories */}
      <div className="relative w-full overflow-hidden p2">
        <div
          ref={scrollRef}
          className="flex gap-3 p-5 w-max select-none"
          style={{ willChange: "transform" }}
        >
          {scrollItems.map((cat, idx) => (
            <motion.div
              key={`${cat.name}-${idx}`}
              onClick={() => handleSelect(cat)}
              whileHover={{ scale: 1.15 }}
              whileTap={clickTap}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`min-w-[60px] p-5 h-[60px] flex flex-col items-center justify-center text-3xl rounded-xl cursor-pointer border-2 shadow-sm transition-colors duration-300
                ${
                  selectedCategory?.name === cat.name
                    ? "bg-purple-300 border-purple-600 text-purple-900 shadow-md"
                    : "bg-white border-transparent text-purple-600 hover:bg-purple-100 hover:border-purple-300"
                }`}
            >
              <span>{cat.icon}</span>
              <p className="text-xs font-medium mt-1 select-none">{cat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emoji grid for selected category */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, ease: "easeIn" }}
          className="w-full max-w-2xl p-4 rounded-lg bg-white shadow-md border border-purple-200"
        >
          <h3 className="text-lg font-semibold text-purple-700 mb-4 text-center select-none underline">
            {selectedCategory.name} Emojis
          </h3>
          <div className="grid grid-cols-5 gap-3 text-3xl sm:text-4xl justify-center">
            {selectedCategory.emojis.map((emoji) => (
              <motion.div
                key={emoji}
                className="p-2 rounded-lg cursor-pointer select-none transition-transform"
                whileHover={{ rotate: 15 }}
                whileTap={{ rotate: -15 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                title={emoji}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EmojiCategory;

import { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const EmojiCategory = ({ whenSelectedCat, player }) => {
  const [category, setCategory] = useState(null);

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
      emojis: [
        "🧙",
        "🧝",
        "🏹",
        "🗡️",
        "🧛",
        "🧟",
        "🧞",
        "🧜",
        "🧚",
        "🧗",
        "🗺️",
      ],
    },
    {
      name: "Games",
      icon: "🎮",
      emojis: [
        "🎮",
        "🕹️",
        "🎲",
        "♟️",
        "🧩",
        "🃏",
        "🎯",
        "🎳",
        "🎰",
        "⚽",
        "🏀",
      ],
    },
    {
      name: "Fantasy",
      icon: "🐉",
      emojis: ["🐉", "🦄", "👾", "🤖", "👻", "🎃", "🪄", "🔮", "🫧"],
    },
    {
      name: "Food",
      icon: "🍕",
      emojis: [
        "🍕",
        "🍔",
        "🍟",
        "🌭",
        "🥪",
        "🌮",
        "🌯",
        "🥙",
        "🍳",
        "🥘",
        "🍲",
      ],
    },
    {
      name: "Nature",
      icon: "🌿",
      emojis: ["🌿", "🌳", "🌻", "🌼", "🌱", "🌾", "🌵", "🍀", "🍃", "🍂"],
    },
    {
      name: "Weather",
      icon: "☀️",
      emojis: [
        "☀️",
        "🌤️",
        "⛅",
        "🌦️",
        "🌧️",
        "⛈️",
        "🌨️",
        "❄️",
        "💨",
        "🌪️",
        "🌈",
      ],
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
  const containerRef = useRef(null);
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      x.current += delta * 0.05; // speed control
      if (x.current >= containerRef.current.scrollWidth / 2) {
        x.current = 0;
      }
      containerRef.current.style.transform = `translateX(-${x.current}px)`;
    }
  });

  const scrollItems = [...emojiCategories, ...emojiCategories]; //duplicated
  function handleCatSelect(cat) {
    setCategory(cat.name);
    if (whenSelectedCat) {
      whenSelectedCat(cat);
    }
  }

  return (
    <div className="relative overflow-hidden w-full py-6 ">
      <div ref={containerRef} className="flex gap-6 w-max">
        {scrollItems.map((cat, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleCatSelect(cat)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`min-w-[220px] cursor-pointer rounded-2xl px-4 py-4 transition-all duration-300 flex flex-col gap-3 items-center border-2
    ${
      category === cat.name
        ? `text-white ${
            player === 1
              ? "bg-[#FF5E7E] border-[#FF5E7E]"
              : "bg-[#00D2FF] border-[#00D2FF]"
          }`
        : "bg-white text-black border-transparent hover:bg-gray-100 hover:border-gray-300"
    }
  `}
          >
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span>{cat.icon}</span>
              <span className="underline">{cat.name}</span>
            </div>

            <div className="grid grid-cols-5 gap-2 text-xl">
              {cat.emojis.slice(0, 10).map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-1 rounded hover:bg-black/5"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default EmojiCategory;

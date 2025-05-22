import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const EmojiCategory = ({ onSelectCategory }) => {
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

  const scrollItems = [...emojiCategories, ...emojiCategories];

  return (
    <div className="relative overflow-hidden w-full py-6 bg-[#1F1F3A] border-t border-[#FF5E7E]">
      <div ref={containerRef} className="flex gap-6 w-max">
        {scrollItems.map((cat, index) => (
          <button
            key={index}
            onClick={() => onSelectCategory(cat)}
            className="min-w-[220px] cursor-pointer bg-white text-black rounded-2xl px-4 py-4 shadow-md hover:bg-[#FF5E7E] transition-all duration-300 flex flex-col gap-3 items-center"
          >
            <div className="flex items-center gap-2 text-xl font-semibold">
              <span>{cat.icon}</span>
              <span className="underline">{cat.name}</span>
            </div>
            <div className="grid grid-cols-5 gap-2 text-xl">
              {cat.emojis.slice(0, 10).map((item, idx) => (
                <div key={idx} className="p-2">
                  {item}
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiCategory;

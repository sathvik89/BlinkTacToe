import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-[#1F1F3A] text-center text-sm text-white border-t border-[#FF5E7E]">
      <div className="flex justify-center items-center gap-2">
        <span className="text-red-500 animate-pulse text-lg">❤️</span>
        <p>
          Made with love by{" "}
          <span className="font-semibold text-[#FFC371]">@Sathvik</span>
        </p>
      </div>
      <div className="mt-1 text-xs text-gray-400">
        © 2025 Blink Tac Toe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


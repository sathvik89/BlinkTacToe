import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4  text-center text-sm text-black ">
      <div className="flex justify-center items-center gap-2">
        <span className="text-red-500 animate-pulse text-lg">❤️</span>
        <p>
          Made with love by{" "}
          <span className="font-semibold text-[#faff65]">@Sathvik</span>
        </p>
      </div>
      <div className="mt-1 text-xs text-black-400">
        © 2025 Blink Tac Toe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

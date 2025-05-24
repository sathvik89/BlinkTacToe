import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import clickSound from "../audio/Click.mp3";
import { useRef } from "react";

export default function HomeButton() {
  const clickSound1 = useRef(new Audio(clickSound));
  const navi = useNavigate();

  const handleHomeClick = () => {
    clickSound1.current.currentTime = 0;
    clickSound1.current.play();
    navi("/");
  };

  return (
    <button
      onClick={handleHomeClick}
      className="w-12 h-12 absolute top-4 right-22 rounded-full border border-purple-300/60 bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center text-white hover:scale-105 transition duration-200"
      aria-label="Go to Home"
    >
      <AiFillHome className="text-xl" />
    </button>
  );
}

import { useNavigate } from "react-router-dom";
import clickSound from "../audio/Click.mp3";
import { useRef } from "react";

export default function BackButton() {
  const clickSound1 = useRef(new Audio(clickSound));
  const navi = useNavigate();
  function handleBack() {
    navi("/");
    clickSound1.current.currentTime = 0; // Rewind to start
    clickSound1.current.play();
  }

  return (
    <button
      onClick={handleBack}
      className="px-4 py-2 bg-gray-800 text-white font-medium rounded-lg 
                 shadow-md hover:bg-gray-700 hover:shadow-lg 
                 focus:outline-none focus:ring-2 focus:ring-gray-500 
                 transition-transform duration-200 hover:scale-105"
    >
      Go Back
    </button>
  );
}

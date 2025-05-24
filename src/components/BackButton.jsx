import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navi = useNavigate();

  return (
    <button
      onClick={() => navi("/")}
      className="px-4 py-2 bg-gray-800 text-white font-medium rounded-lg 
                 shadow-md hover:bg-gray-700 hover:shadow-lg 
                 focus:outline-none focus:ring-2 focus:ring-gray-500 
                 transition-transform duration-200 hover:scale-105"
    >
      Go Back
    </button>
  );
}

import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navi = useNavigate();

  return (
    <button onClick={() => navi(-1)} className="p-2 bg-gray-200 rounded">
      Go Back
    </button>
  );
}

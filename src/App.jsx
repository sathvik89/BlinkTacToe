import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Langingpage from "./pages/Langingpage";
import Setup from "./pages/Setup";
import { PlayerProvider } from "./context/PlayerContext";
import Gamepage from "./pages/Gamepage";
function App() {
  return (
    <BrowserRouter>
      <PlayerProvider>
        <Routes>
          <Route path="/" element={<Langingpage />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/gamepage" element={<Gamepage />} />
        </Routes>
      </PlayerProvider>
    </BrowserRouter>
  );
}

export default App;

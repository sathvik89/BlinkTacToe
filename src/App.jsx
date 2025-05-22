import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Langingpage from "./pages/Langingpage";
import Setup from "./pages/Setup";
import Gamepage from "./pages/Gamepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Langingpage />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/gamepage" element={<Gamepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

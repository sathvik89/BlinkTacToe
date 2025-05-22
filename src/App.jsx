import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Langingpage from "./pages/Langingpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Langingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

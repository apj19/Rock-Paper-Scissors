import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScoreBoard from "./Components/ScoreBoard";
import GameBoard from "./Components/GameBoard";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RPS from "./pages/RPS";
import RPSLS from "./pages/RPSLS";
import NotFound from "./pages/NotFound";
import NavBar from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main
      className="min-w-[375px] max-w-[1440px] min-h-[100vh] 
  font-['Barlow_Semi_Condensed'] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1f3756] to-[#141539]
  flex justify-start items-center p-6 
  text-white flex-col overflow-x-hidden"
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rps" element={<RPS />}></Route>
        <Route path="/rpsls" element={<RPSLS />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;

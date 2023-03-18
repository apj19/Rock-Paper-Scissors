import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScoreBoard from "./Components/ScoreBoard";
import GameBoard from "./Components/GameBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main
      className="min-w-[375px] max-w-[1440px] min-h-[100vh] 
  font-['Barlow_Semi_Condensed'] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1f3756] to-[#141539]
  flex justify-start items-center p-6
  text-white flex-col overflow-hidden"
      // #1f3756 #141539  bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600
      // bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1f3756] to-[#141539]
      //bg-gradient-to-r from-[#1f3756] to-[#141539]
    >
      <ScoreBoard></ScoreBoard>
      <GameBoard />
    </main>
  );
}

export default App;

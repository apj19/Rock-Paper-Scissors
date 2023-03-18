import React from "react";
import ScoreBoard from "../Components/ScoreBoard";
import GameBoard from "../Components/GameBoard";

export default function () {
  return (
    <div className="flex flex-col justify-center items-center">
      <ScoreBoard />
      <GameBoard />
    </div>
  );
}

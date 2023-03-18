import React from "react";
import ScoreBoard from "../Components/ScoreBoard";
import GameBoard from "../Components/GameBoard";

export default function () {
  return (
    <div className="flex flex-col justify-center items-center">
      <ScoreBoard title={["ROCK", "PAPER", "SCISSORS"]} />
      <GameBoard bonusGame={true} />
    </div>
  );
}

import React from "react";
import ScoreBoard from "../Components/ScoreBoard";
import GameBoard from "../Components/GameBoard";

function RPSLS() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ScoreBoard title={["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOKE"]} />
      <GameBoard bonusGame={false} />
    </div>
  );
}

export default RPSLS;

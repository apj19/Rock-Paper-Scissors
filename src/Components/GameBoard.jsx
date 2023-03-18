import React from "react";
import PlayerOptions from "./PlayerOptions";
import { useSelector } from "react-redux";
import Choices from "./Choices";

function GameBoard() {
  const showchoicesBoard = useSelector((state) => state.game.showChoice);
  const PlayerSelection = useSelector((state) => state.game.playerSelection);

  return (
    <div>
      {!showchoicesBoard && <PlayerOptions />}
      {showchoicesBoard && <Choices player={PlayerSelection} />}
    </div>
  );
}

export default GameBoard;

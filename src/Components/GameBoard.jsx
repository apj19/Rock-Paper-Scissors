import React from "react";
import PlayerOptions from "./PlayerOptions";
import { useSelector } from "react-redux";
import Choices from "./Choices";
import BonusOptions from "./BonusOptions";

function GameBoard({ bonusGame }) {
  const showchoicesBoard = useSelector((state) => state.game.showChoice);
  const PlayerSelection = useSelector((state) => state.game.playerSelection);
  // console.log(bonusGame);
  return (
    <div className="flex justify-center items-center  ">
      {!showchoicesBoard && (bonusGame ? <PlayerOptions /> : <BonusOptions />)}
      {showchoicesBoard && (
        <Choices player={PlayerSelection} game={bonusGame} />
      )}
    </div>
  );
}

export default GameBoard;

import React, { useState, useEffect } from "react";
import { optionsList } from "../utilities/options";
import { useDispatch } from "react-redux";
import { restartGame, scoreUpdate } from "../features/gameSlice";
import { gameresult } from "../utilities/gameresult";

function Choices({ player }) {
  const [housepicked, setHousePicked] = useState("");
  const [showResult, setshowResult] = useState(false);
  const [resultMessage, setresultMessage] = useState("");
  const [emoji, setEmoji] = useState("");

  const dispatch = useDispatch();
  let houceChoice = "";

  useEffect(() => {
    function housechoice() {
      setTimeout(() => {
        houceChoice = Math.ceil(Math.random() * 2);
        setHousePicked(houceChoice);
      }, 1000);
    }
    function finalResult() {
      setTimeout(() => {
        setshowResult(true);
        let gameresult1 = gameresult(player, houceChoice);
        // console.log(gameresult1);
        dispatch(scoreUpdate(gameresult1.result));
        setresultMessage(gameresult1.message);
        setEmoji(gameresult1.emoji);
      }, 2000);
    }
    housechoice();
    finalResult();
  }, [player]);

  return (
    <div className="grid grid-cols-2 gap-20">
      <p className="text-white tracking-wide text-[1.5rem]">You Picked</p>
      <p className="text-white tracking-wide text-[1.5rem]">The House Picked</p>
      <div>{optionsList[player].value}</div>
      <div>{optionsList[housepicked]?.value}</div>

      {showResult && (
        <div
          onClick={() => {
            dispatch(restartGame());
            setshowResult(false);
          }}
          className="absolute left-0 top-0 w-full h-full backdrop-blur-md text-white z-10 flex justify-center items-center"
        >
          <div className="bg-[#141539] text-white w-[350px] p-4 rounded-md flex flex-col justify-center text-center text-[2.5rem]  tracking-wider gap-8  ">
            <p>{resultMessage}</p>
            <p>{emoji}</p>
            <button
              onClick={() => {
                dispatch(restartGame());
                setshowResult(false);
              }}
              className="text-[1.5rem] p-2 text-red-500 bg-white rounded-sm"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Choices;

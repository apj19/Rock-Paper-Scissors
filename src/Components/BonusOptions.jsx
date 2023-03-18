import React from "react";
import { bonusOptionsList } from "../utilities/options";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { playersChoice } from "../features/gameSlice";

function BonusOptions() {
  const [showRules, setShowRules] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className=" w-[280px] h-[300px] md:w-[400px] md:h-[400px] my-16 md:mt-0  bg-center bg-no-repeat  "
      style={{ backgroundImage: "url(./bg-pentagon.svg)" }}
    >
      <div
        onClick={() => dispatch(playersChoice(0))}
        className="relative left-[90px] bottom-[50px] md:left-[20px] md:bottom-[-130px] "
      >
        {bonusOptionsList[0].value}
      </div>

      <div
        onClick={() => dispatch(playersChoice(1))}
        className="relative left-[200px] bottom-[30px] md:left-[150px] md:bottom-[140px] "
      >
        {bonusOptionsList[1].value}
      </div>

      <div
        onClick={() => dispatch(playersChoice(2))}
        className="relative left-[-30px] bottom-[130px] md:left-[260px] md:bottom-[150px]"
      >
        {bonusOptionsList[2].value}
      </div>

      <div
        onClick={() => dispatch(playersChoice(3))}
        className="relative left-[-10px] bottom-[80px] md:left-[50px] md:bottom-[130px]"
      >
        {bonusOptionsList[3].value}
      </div>

      <div
        onClick={() => dispatch(playersChoice(4))}
        className="relative left-[160px] bottom-[180px] md:left-[220px] md:bottom-[270px]"
      >
        {bonusOptionsList[4].value}
      </div>

      <button
        onClick={() => setShowRules(true)}
        className="fixed bottom-10 left-[150px] tracking-wider p-2 border rounded-md md:bottom-10 md:left-[80%] "
      >
        RULES
      </button>

      {showRules && (
        <div
          onClick={() => setShowRules(false)}
          className="absolute left-0 top-0 w-full h-full backdrop-blur-md text-white z-10 flex justify-center items-center"
        >
          <div className="bg-white text-black w-[350px] p-4 rounded-md ">
            <div className="flex justify-between items-center text-[1.5rem] mb-8">
              <p>RULES</p>
              <i
                onClick={() => setShowRules(false)}
                className="fa-solid fa-xmark cursor-pointer"
              ></i>
            </div>
            <img src="./image-rules-bonus.svg" alt="Rules" />
          </div>
        </div>
      )}
    </div>
  );
}

export default BonusOptions;

import React, { useState } from "react";
import { optionsList } from "../utilities/options";
import { useDispatch } from "react-redux";
import { playersChoice } from "../features/gameSlice";

function PlayerOptions() {
  const [showRules, setShowRules] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className=" w-[280px] h-[280px] md:w-[400px] md:h-[400px] mt-16 md:mt-0  bg-center bg-no-repeat  "
      style={{ backgroundImage: "url(./bg-triangle.svg)" }}
    >
      <div
        onClick={() => dispatch(playersChoice(0))}
        className="relative left-[-20px] bottom-[50px] md:left-0 md:bottom-0 "
      >
        {optionsList[0].value}
      </div>
      <div
        onClick={() => dispatch(playersChoice(1))}
        className="relative left-[160px] bottom-[190px] md:left-[250px] md:bottom-[140px] "
      >
        {optionsList[1].value}
      </div>
      <div
        onClick={() => dispatch(playersChoice(2))}
        className="relative left-[60px] bottom-[120px] md:left-[120px] md:bottom-[50px]"
      >
        {optionsList[2].value}
      </div>

      <button
        onClick={() => setShowRules(true)}
        className="fixed bottom-[50px] right-8 md:bottom-10 md:right-20 tracking-wider p-2 border rounded-md"
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
            <img src="./image-rules.svg" alt="Rules" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerOptions;

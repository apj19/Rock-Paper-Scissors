import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ScoreBoard({ title }) {
  const score = useSelector((state) => state.game.value);
  return (
    <div className="border border-[#606e85] p-4 flex justify-between items-center md:w-[500px] gap-8 rounded-[1rem] mb-8">
      <div className="font-[700] text-[1.5rem] leading-6 tracking-wider ">
        {title.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
        {/* <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p> */}
      </div>
      <div className="w-[120px] h-[100px] bg-white rounded-[1rem] flex flex-col justify-center items-center text-[#202431] ">
        <p className="text-[#202431] font-[500] tracking-wider pt-4">SCORE</p>
        <p className="text-[2rem]">{score}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;

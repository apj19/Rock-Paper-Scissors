import React from "react";

function ScoreBoard() {
  return (
    <div className="border border-[#606e85] p-4 flex justify-between items-center w-[500px] rounded-[1rem] mb-8">
      <div className="font-[700] text-[1.5rem] leading-6 tracking-wider ">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>
      <div className="w-[120px] h-[100px] bg-white rounded-[1rem] flex justify-center items-start">
        <p className="text-[#202431] font-[500] tracking-wider pt-4">SCORE</p>
      </div>
    </div>
  );
}

export default ScoreBoard;

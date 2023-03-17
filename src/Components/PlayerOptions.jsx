import React from "react";

function PlayerOptions() {
  return (
    <div
      className="w-[400px]  bg-center bg-no-repeat  "
      style={{ backgroundImage: "url(./bg-triangle.svg)" }}
    >
      <div className="bg-white  border-[20px] border-[#4865f4] w-[140px] h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer ">
        <img src="./icon-paper.svg" alt="Paper" />
      </div>
      <div className="relative left-[250px] bottom-[140px] bg-white  border-[20px] border-[#dc2e4e] w-[140px] h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer  ">
        <img src="./icon-rock.svg" alt="Paper" />
      </div>
      <div className="relative left-[120px] bottom-[50px] bg-white  border-[20px] border-[#ec9e0e] w-[140px] h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer  ">
        <img src="./icon-scissors.svg" alt="Paper" />
      </div>
      <button className="fixed bottom-10 right-20 tracking-wider p-2 border rounded-md">
        RULES
      </button>
    </div>
  );
}

export default PlayerOptions;

const optionsList = [
  {
    id: "Paper",
    value: (
      <div className="bg-white  border-[20px] border-[#4865f4] w-[140px] h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer ">
        <img src="./icon-paper.svg" alt="Paper" />
      </div>
    ),
  },
  {
    id: "Rock",
    value: (
      <div className="bg-white  border-[20px] border-[#dc2e4e] w-[140px] h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer  ">
        <img src="./icon-rock.svg" alt="Paper" />
      </div>
    ),
  },
  {
    id: "Scissors",
    value: (
      <div className=" bg-white  border-[20px] border-[#ec9e0e] w-[140px] h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer  ">
        <img src="./icon-scissors.svg" alt="scissors" />
      </div>
    ),
  },
];

const bonusOptionsList = [
  {
    id: "Scissors",
    value: (
      <div className=" bg-white  border-[10px] md:border-[20px] border-[#ec9e0e] w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer  ">
        <img src="./icon-scissors.svg" alt="scissors" />
      </div>
    ),
  },
  {
    id: "Paper",
    value: (
      <div className="bg-white  border-[10px]  md:border-[20px] border-[#4865f4] w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer ">
        <img src="./icon-paper.svg" alt="Paper" />
      </div>
    ),
  },
  {
    id: "Rock",
    value: (
      <div className="bg-white  border-[10px]  md:border-[20px] border-[#dc2e4e] w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer  ">
        <img src="./icon-rock.svg" alt="Paper" />
      </div>
    ),
  },
  {
    id: "lizard",
    value: (
      <div className="bg-white  border-[10px]  md:border-[20px] border-[#8c5de5] w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer ">
        <img src="./icon-lizard.svg" alt="Paper" />
      </div>
    ),
  },
  {
    id: "spock",
    value: (
      <div className="bg-white  border-[10px]  md:border-[20px] border-[#52bed1] w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-[50%] flex justify-center items-center cursor-pointer  ">
        <img src="./icon-spock.svg" alt="Paper" />
      </div>
    ),
  },
];

export { optionsList, bonusOptionsList };

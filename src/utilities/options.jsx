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

export { optionsList };

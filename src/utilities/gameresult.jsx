function gameresult(palyerChoice, HouseChoice) {
  // console.log(palyerChoice,HouseChoice);
  if (palyerChoice < HouseChoice) {
    return {
      message: "YOU WIN!!!!!!!!",
      emoji: <i className="fa-solid fa-trophy"></i>,
      result: "win",
    };
  } else if (palyerChoice == HouseChoice) {
    return {
      message: "DRAW",
      emoji: <i className="fa-solid fa-smog"></i>,
      result: "tie",
    };
  } else {
    return {
      message: "YOU LOSE",
      emoji: <i className="fa-solid fa-heart-crack"></i>,
      result: "lose",
    };
  }
}

export { gameresult };

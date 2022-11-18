const gameBoard = (() => {
  const test = "hei";
  const gameBoardArray = [];
  return {
    gameBoardArray,
    test,
  };
})();
console.log(gameBoard.hei);

gameBoard.gameBoardArray.push(13, 5, "banaani", 135, 34, 134, "mandariini");
console.log(gameBoard.gameBoardArray);

//function module to control the display
const displayController = (() => {
  const test = () => {
    console.log("hei siellä  ! :D ");
  };
  return { test };
})();

console.log(displayController.test());

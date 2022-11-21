const tile1 = document.getElementById("tile1");
const tile2 = document.getElementById("tile2");
const tile3 = document.getElementById("tile3");
const tile4 = document.getElementById("tile4");
const tile5 = document.getElementById("tile5");
const tile6 = document.getElementById("tile6");
const tile7 = document.getElementById("tile7");
const tile8 = document.getElementById("tile8");
const tile9 = document.getElementById("tile9");
const tiles = document.querySelectorAll(".tile");
const winner = document.getElementById("winner");
const restartButton = document.getElementById("restartButton");

let turn = 0;
//factory function that creates players
const playerFactory = (player, mark) => {
  return { player, mark };
};
const player1 = playerFactory("player 1", "X");
const player2 = playerFactory("player 2", "O");

// event listener for the tiles
tiles.forEach((tile) => {
  tile.addEventListener("click", (e) => {
    // if tile is empty add a mark to the tile
    if (tile.innerHTML === "") {
      // alternate player turns. If turn variable is even ( % 2 = 0) player one turn if not player2 turn
      if (turn % 2 === 0) {
        tile.innerHTML = player1.mark;
        turn++;
      } else {
        tile.innerHTML = player2.mark;
        turn++;
      }
    }
    checkGameState();
  });
});
// event listener to a reset button to reset the game
restartButton.addEventListener("click", (e) => {
  tiles.forEach((tile) => {
    tile.innerHTML = "";
  }),
    (winner.innerHTML = "");
  turn = 0;
  tiles.forEach((tile) => {
    tile.style.pointerEvents = "auto";
  });

  restartButton.innerHTML = "Reset!";
});
//function to check the state of the game
function checkGameState() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // loop trough the win combination array
  for (let i = 0; i < winCombinations.length; i++) {
    // get the indexes for the win combinations
    const [x, y, z] = winCombinations[i];
    // make 3 value variables for each combination from the tiles nodelist
    const value1 = tiles[x].innerHTML;
    const value2 = tiles[y].innerHTML;
    const value3 = tiles[z].innerHTML;
    // check if any player has the winning combination
    if (value1 !== "" && value1 === value2 && value1 === value3) {
      winner.innerHTML = value1 + " won!";
      restartButton.innerHTML = "Play again!";
      tiles.forEach((tile) => {
        tile.style.pointerEvents = "none";
      });
    }
    //check for a tie
    else if (
      tile1.innerHTML !== "" &&
      tile2.innerHTML !== "" &&
      tile3.innerHTML !== "" &&
      tile4.innerHTML !== "" &&
      tile5.innerHTML !== "" &&
      tile6.innerHTML !== "" &&
      tile7.innerHTML !== "" &&
      tile8.innerHTML !== "" &&
      tile9.innerHTML !== "" &&
      value1 !== value2 &&
      value1 !== value3
    ) {
      winner.innerHTML = "wow.. a draw";
      restartButton.innerHTML = "Play again!";
    }
  }
}

// player chooses weapon, humans use prompt, computer picks a random number
function chooseWeapon(player) {
  if (player.playerType === "H") {
    while (true) { // loop includes validation that it has been entered correctly.
      let weaponType = prompt(`${player.name}, choose your weapon:\n 1. Rock (type r) \n 2. Paper (type p) \n 3. Scissors (type s)`);
      if (weaponType.toLowerCase() === "r" || weaponType.toLowerCase() === "p" || weaponType.toLowerCase() === "s"){
        player.playerChoice = gameObject.weaponChoices[weaponType]; // string is the key to the actual value in weaponchoice object.
        break;
      }}} 
      else {
    player.playerChoice = setRandomWeapon();
  }
}


// this function is for the computer to pick a weapon at random and return an integer value
function setRandomWeapon() {
  let randomChoice = Math.floor(Math.random() * 3 - 1);
  return randomChoice;
}


// logic to determine who wins each round
function determineRoundWinner() {
  let player1ChoiceString = changeToString(playerObject1.playerChoice); // variables hold choice as a string for display purposes.
  let player2ChoiceString = changeToString(playerObject2.playerChoice);

  switch (playerObject1.playerChoice - playerObject2.playerChoice) {
    case 0:
      alert(
        `${playerObject1.name} chose ${player1ChoiceString}. ${playerObject2.name}  chose ${player2ChoiceString}. It's a draw!\n\nCURRENT SCORE:\n${playerObject1.name}: ${gameObject.player1Score}, ${playerObject2.name}: ${gameObject.player2Score}`
      );
      break;
    case 1:
      gameObject.player2Score += 1;
      alert(
        `${playerObject1.name} chose ${player1ChoiceString}. ${playerObject2.name} chose ${player2ChoiceString}. ${playerObject2.name} won this round.\n\nCURRENT SCORE:\n${playerObject1.name}: ${gameObject.player1Score}, ${playerObject2.name}: ${gameObject.player2Score}`
      );
      break;
    case 2:
      gameObject.player1Score += 1;
      alert(
        `${playerObject1.name} chose ${player1ChoiceString}. ${playerObject2.name} chose ${player2ChoiceString}. ${playerObject1.name} won that round!\n\nCURRENT SCORE:\n${playerObject1.name}: ${gameObject.player1Score}, ${playerObject2.name}: ${gameObject.player2Score}`
      );
      break;
    case -1:
      gameObject.player1Score += 1;
      alert(
        `${playerObject1.name} chose ${player1ChoiceString}. ${playerObject2.name} chose ${player2ChoiceString}. ${playerObject1.name} won that round!\n\nCURRENT SCORE:\n${playerObject1.name}: ${gameObject.player1Score}, ${playerObject2.name}: ${gameObject.player2Score}`
      );
      break;
    case -2:
      gameObject.player2Score += 1;
      alert(
        `${playerObject1.name} chose ${player1ChoiceString}. ${playerObject2.name} chose ${player2ChoiceString}. ${playerObject2.name} won that round!\n\nCURRENT SCORE:\n${playerObject1.name}: ${gameObject.player1Score}, ${playerObject2.name}: ${gameObject.player2Score}`
      );
      break;
  }
}


// to nicely display options chosen to the user the choice number is passed to this function and the string is returned.
function changeToString(num) {
  if (num == -1) {
    return "scissors";
  } else if (num == 0) {
    return "paper";
  } else if (num == 1) {
    return "rock";
  }
}

// function to set game number
function setGameNumber() {
  let gameNumber = parseInt(
    prompt("Choose the maximum score (1-10)")
  );
  if (gameNumber > 10 || gameNumber < 1) {
    // basic validation of the games selected
    gameNumber = prompt("Between (1-10) please.");
  } else {
    return gameNumber;
  }
}

// GAME STARTS

// AUDIO FILE CREATED
//let gameOverSound = new Audio("./gameover.wav");

// INITIATE THE MAIN GAME OBJECT/CONTROLLER
let gameObject = {
  player1Score: 0,
  player2Score: 0,
  weaponChoices: {
    r: 1,
    p: 0,
    s: -1,
  },
};

// INITIATE THE PLAYER OBJECTS
let playerObject1 = {
  name: "",
  playerChoice: 0, // represents rock, paper or scissors choice, conversions made in the gameobject.weaponchoice
  playerType: "H", // HUMAN OR COMPUTER
};

// PLAYEr 1 ALWAYS HUMAN, P2 can BE Human ("H") or Computer ("C")
let playerObject2 = {
  name: "",
  playerChoice: 0,
  playerType: "H",
};

// set player 1 name
while(playerObject1.name === ""){
playerObject1.name = prompt(
  "This is Rock, Paper, Scissors.\nPlayer 1, What is your name?"
)};

// Choice of two player or commputer
// TO DO if they enter not H or C
let gameType = prompt(
  "Type '1' to play single player or '2' to play with a friend:"
);
if (gameType === "2") {
  playerObject2.name = prompt("Player 2, What is your name?");
} else {
  playerObject2.name = "Computer";
  playerObject2.playerType = "C";
}

// determining the number of games required to win
let gameNumber = setGameNumber();

// main game loop, each player selects weapon, outcome evaluated, scores modified, check if target score reached.
while (
  gameObject.player1Score !== gameNumber &&
  gameObject.player2Score !== gameNumber
) {
  chooseWeapon(playerObject1);
  chooseWeapon(playerObject2);
  determineRoundWinner();
}



if (gameObject.player1Score > gameObject.player2Score) {
  alert(`Game over, ${playerObject1.name} wins. \n\nFINAL SCORE:\n${playerObject1.name}: ${gameObject.player1Score}, ${playerObject2.name}: ${gameObject.player2Score}`);
  
} else {
  alert(`Game over, ${playerObject2.name} wins. \n\nFINAL SCORE:\n${playerObject1.name}: ${gameObject.player1Score}, ${playerObject2.name}: ${gameObject.player2Score}`);
}


// stretch goals:
// add more messages for each outcome
// Lizard Spock
// Game History
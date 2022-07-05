
// function computerPlay() will return a random result of rock, paper or scissors.
function computerPlay() {
    randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == "0") {
        return "paper";
    }
    else if (randomChoice == "1") {
        return "rock";
    }
    else {
        return "scissors";
    }
}

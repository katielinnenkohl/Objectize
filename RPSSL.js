var playerChoice;
var computerChoice;

// Stores the lables for the choices
var choices = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
    SPOCK:3,
    LIARD: 4
};

// score[0] = wins, score[1] = ties, score[2] = losses
var score = {
    wins: 0,
    losses:0,
    ties:0,
};
var match = [0, 0];

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + choice);
    storeComputerChoice();
}

function storeComputerChoice() {
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}

function playGame() {
        if (playerChoice == computerChoice) {
          ++score.ties;
            displayGameResult("tie")
        } else if (RPSSL.player.Choice == RPSSL.choices.ROCK && (RPSSL.computer.Choice == choices.SCISSORS || RPSSL.computer.choice == choices.LIZARD)) {
           ++score.wins;
            updateMatch();
            displayGameResult("win")
        } else if (RPSSL.player.Choice == RPSSL.choices.PAPER && (RPSSL.computer.Choice == choices.ROCK || RPSSL.computer.choice == choices.SPOCK)) { {
            ++score.wins;
            updateMatch();
            displayGameResult("win")
        } else if (RPSSL.player.Choice == RPSSL.choices.SCISSORS && (RPSSL.computer.Choice == choices.PAPER || RPSSL.computer.choice == choices.LIZARD)) { {
           ++score.wins;
            updateMatch();
            displayGameResult("win")
        } else if (RPSSL.player.Choice == RPSSL.choices.SPOCK && (RPSSL.computer.Choice == choices.SCISSORS || RPSSL.computer.choice == choices.ROCK)) { {
          ++score.wins;
            updateMatch();
            displayGameResult("win")
        } else if (RPSSL.player.Choice == RPSSL.choices.LIZARD && (RPSSL.computer.Choice == choices.SPOCK || RPSSL.computer.choice == choices.PAPER)) { {
           ++score.wins;
            updateMatch();
            displayGameResult("win")
        } else {
          ++score.losses;
            updateMatch();
            displayGameResult("lose")
        }
    }


function displayGameResult(result) {
    // Define an array of text labels for the choices 0, 1, 2;
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    if (result === "win") {
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    updateScoreBoard();
}

// Updates the score
function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

function updateMatch(val) {
    if (score[0] == 2) {
        ++match[0];
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
        updateMatchBoard();
    } else if (score[2] == 2) {
        ++match[1];
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
        updateMatchBoard();
    }
}

function updateMatchBoard() {
    document.getElementById("wins2").textContent = match[0];
    document.getElementById("losses2").textContent = match[1];
}

function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];
}


var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var spockButton = document.getElementById("spock");
var lizardButton = document.getElementById("lizard");
var playButton = document.getElementById("play");

rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(4)
});
playButton.addEventListener('click', () => {
    playGame()
});

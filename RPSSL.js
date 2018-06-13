var RPSSL = {

    choices: {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
    SPOCK:3,
    LIARD: 4
    },
    score: {
        wins: 0,
        losses:0,
        ties:0
    },
    results: {
        WIN: 1,
        TIE: 0,
        LOSS: -1
    },
    match: {
        WINS:0,
        LOSSES:0
    },
    var player = new player(),
var computer = new player()

},

rockButton: document.getElementById("rock"),
paperButton: document.getElementById("paper"),
scissorsButton: document.getElementById("scissors"),
spockButton: document.getElementById("spock"),
lizardButton: document.getElementById("lizard"),
playButton: document.getElementById("play"),


storePlayerChoice: function(choice){
    this.player.choice = choice;
    console.log(" My choice = " + this.player.choice);
    this.storeComputerChoice();
},

    storeComputerChoice: function(){
        this.computer.choice = Math.floor(Math.random() * 5);
    }
playGame: function() {
        if (player.choice == computer.choice) {
          ++RPSSL.score.ties;
            RPSSL.displayGameResult("tie")
        } else if (RPSSL.player.Choice == RPSSL.choices.ROCK && (RPSSL.computer.Choice == choices.SCISSORS || RPSSL.computer.choice == choices.LIZARD)) {
           ++RPSSL.score.wins;
            RPSSL.updateMatch();
            RPSSL.displayGameResult("win")
        } else if (RPSSL.player.Choice == RPSSL.choices.PAPER && (RPSSL.computer.Choice == choices.ROCK || RPSSL.computer.choice == choices.SPOCK)) { {
            ++RPSSL.score.wins;
            RPSSL.updateMatch();
            RPSSL.displayGameResult("win")
        } else if (RPSSL.player.Choice == RPSSL.choices.SCISSORS && (RPSSL.computer.Choice == choices.PAPER || RPSSL.computer.choice == choices.LIZARD)) { {
           ++RPSSL.score.wins;
            RPSSL.updateMatch();
            RPSSL.displayGameResult("win")
        } else if (RPSSL.player.Choice == RPSSL.choices.SPOCK && (RPSSL.computer.Choice == choices.SCISSORS || RPSSL.computer.choice == choices.ROCK)) { {
          ++RPSSL.score.wins;
            RPSSL.updateMatch();
            RPSSL.displayGameResult("win")
        } else if (RPSSL.player.Choice == RPSSL.choices.LIZARD && (RPSSL.computer.Choice == choices.SPOCK || RPSSL.computer.choice == choices.PAPER)) { {
           ++RPSSL.score.wins;
            RPSSL.updateMatch();
            RPSSL.displayGameResult("win")
        } else {
          ++RPSSL.score.losses;
            RPSSL.updateMatch();
            RPSSL.displayGameResult("lose")
        }
    }

displayGameResult: function(result) {
    // Define an array of text labels for the choices 0, 1, 2;
    var message = "Your choice was " + RPSSL.player.choice + " and the computer's choice was " + RPSSL.computer.choice+ ".";
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

    RPSSL.updateScoreBoard();
}

updateMatch: function(val) {
    if (RPSSL.score.wins == 2) {
        ++RPSSL.match.WINS;
        RPSSL.score.wins = 0;
        RPSSL.score.losses = 0;
        RPSSL.score.ties = 0;
        RPSSL.updateMatchBoard();
    } else if (RPSSL.score.losses == 2) {
        ++RPSSL.match.LOSSES;
        RPSSL.score.wins = 0;
        RPSSL.score.losses = 0;
        RPSSL.score.ties = 0;
        RPSSL.updateMatchBoard();
    }
}
updateMatchBoard: function() {
    document.getElementById("wins2").textContent = RPSSL.match.WINS;
    document.getElementById("losses2").textContent = RPSSL.match.LOSSES;
}
displayScoreBoard: function (winsId, lossesId, tiesId) {
    document.getElementById(winsId).textContent = RPSSSL.score.wins;
    document.getElementById(lossesId).textContent = RPSSL.score.losses;
    document.getElementById(tiesId).textContent = RPSSL.score.ties;
}




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

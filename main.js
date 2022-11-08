//for the div reset
let resetBtn = document.getElementById("reset");

//for the div score player
let scorePlayer = document.getElementById("player-score");
let scoreComputer = document.getElementById("computer-score");
let btnPlayer = [...document.getElementsByClassName("btn-player")]; //transforme la node list en tableau avec les crochets et spread operator ...

//for the div score computer
let crock = document.getElementById("c-rock");
let cpaper = document.getElementById("c-paper");
let cscissors = document.getElementById("c-scissors");

//dynamic change for the message
let message = document.getElementById("message");
let next = document.getElementById("next")

//game logic
const playRound = (e) => {
    let choice = e.target.closest(".btn-player"); //pour récupérer la div .btn-player peut importe où on clique (closest=élément le plus près)
    //console.log(choice);

    btnPlayer.forEach((btn) => {
        btn.classList.add("desactivated"); //tous les btn sont désactivés
        btn.removeEventListener("click", playRound); //on ne veut plus cliquer sur les autres btn quand l'un des btn est cliqué
    });

    choice.classList.remove("desactivated"); //retirer les class désactivées
    choice.classList.add("active"); //ajout de la class activé (btn clické)

    //get choice value player and computer
    let choicePlayer = choice.id

    let choiceComputer = doChoiceComputer();
};

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const doChoiceComputer = () => {
    //0 = rock
    //1 = paper
    //2 = scissors

    //generat random number
    let nbRandom = Math.floor(Math.random() * 3);

    switch (nbRandom) {
        case 0:
            crockBtn.classList.add("active");
            return ROCK;
        case 0:
            crockBtn.classList.add("active");
            return ROCK;
        case 0:
            crockBtn.classList.add("active");
            return ROCK;

    }
}

btnPlayer.forEach(btn => btn.addEventListener("click", playRound)); 
const playerChoiceText = document.querySelector(".choice-text");
const confirmBtn = document.querySelector(".confirm");
const aiChoiceTxt = document.querySelector(".ai-choice");
const result = document.querySelector(".aftermath-text");
const playerScore = document.querySelector(".player-score");
const aiScore = document.querySelector(".ai-score");

let playerChosen = false;
let playerScorePts = 0;
let aiScorePts = 0;
let playerChoice;

document.querySelectorAll(".rock, .paper, .scissor").forEach(item => {
    item.addEventListener("click", () => playerTurn(item.className));
  });

confirmBtn.addEventListener("click", () => choiceConfirmation());


function playerTurn(choice) {
    playerChoiceText.innerText = choice;
    playerChosen = true;
    playerChoice = choice;
}

function choiceConfirmation() {
    if (playerChosen) {
        gameLogic();
    } else {
        alert("Please Choose one");
    };
};

function gameLogic() {
    let aiRandomizer = Math.floor(Math.random() * 3);
    let aiChoice;

    switch (aiRandomizer) {
        case 0:
            aiChoice = "rock";
            break;
        case 1:
            aiChoice = "paper";
            break;
        case 2:
            aiChoice = "scissor";
            break;
        default:
            break;
    };

    console.log(aiChoice);
    aiChoiceTxt.innerText = aiChoice;

    if (playerChoice === aiChoice) {
        result.innerText = "It's a Draw!"
    } else if (playerChoice === "rock" && aiChoice === "scissor" ||
        playerChoice === "paper" && aiChoice === "rock" ||
        playerChoice === "scissor" && aiChoice === "paper"
    ) {
        result.innerText = "You Win!"
        playerScore.innerText =  `Player = ${playerScorePts += 1}`;
    } else {
        result.innerText = "You Lose!"
        aiScore.innerText =  `AI = ${aiScorePts += 1}`;
    };
    
}
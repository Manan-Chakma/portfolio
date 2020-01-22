let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sci_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

//console.log(getComputerChoice());

function convertToWord(letter){
    if(letter == "r")   return "ROCK";
    if(letter == "p") return "PAPAER";
    return "SCISSORS";
}

function win(userChoice, computerChoice){
    // increase user score;
    userScore++;
    //console.log("User Score"+userScore+ "  computer Score: "+computerScore);
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();

    result_div.innerHTML = convertToWord(userChoice)+smallUserWord+" Beats "+convertToWord(computerChoice)+smallCompWord+". You Win";

}
function lose(userChoice, computerChoice){
    // increase computer score;
    computerScore++;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    //console.log("User Score"+userScore+ "  computer Score: "+computerScore);
    compScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(computerChoice)+smallCompWord+ " Beats "+convertToWord(userChoice)+smallUserWord+". Computer  Win";
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    //console.log("User Score"+userScore+ "  computer Score: "+computerScore);
    result_div.innerHTML = convertToWord(userChoice)+ smallUserWord+" Equals "+convertToWord(computerChoice)+smallCompWord+". Draw";
}

function game(userChoice){
    //console.log("selection: "+userChoice);
    const computerChoice = getComputerChoice();

    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            {win(userChoice, computerChoice);
            break;
        }

        case "rs":
        case "rp":
        case "ps":
            {
                lose(userChoice, computerChoice);
                break;
            }
            

        case "rr":
        case "pp":
        case "ss":
            {
                draw(userChoice, computerChoice);
                break;
            }
            
        
    }

}

function main(){
    rock_div.addEventListener('click', function(){
        //console.log('rock clicked');
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        //console.log('paper clicked');
        game("p");
    });
    
    sci_div.addEventListener('click', function(){
        //console.log('sci clicked');
        game("s");
    });
}

main();
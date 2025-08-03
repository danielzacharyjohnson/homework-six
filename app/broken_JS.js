let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(numb) {
  console.log("Player chose: " + PlayerChoice[numb].innerHTML);

  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];

  console.log("The computer chose: " + CompDecision);

  //document.getElementById("resultDecision").innerHTML == "The computer chose:" + CompDecision;
  
  document.getElementById("resultDecision").innerHTML = "The computer chose: " + CompDecision;

  //NOTE: If a tie, subtract -0.5

  if ((numb == 0)) {
    if (CompDecision == "Paper") {
      innerscore -= 1;
    }
    if (CompDecision == "Scissors") {
      innerscore += 1;
    }
    if (CompDecision == "Rock") {
      innerscore -= 0.5;
    }
  }

  else if ((numb == 1)) {
    if (CompDecision == "Rock") {
      innerscore += 1;
    }
    if (CompDecision == "Scissors") {
      innerscore -= 1;
    }
    if (CompDecision == "Paper") {
      innerscore -= 0.5;
    }
  }

  else if ((numb == 2)) {
    if (CompDecision == "Rock") {
      innerscore -= 1;
    }
    if (CompDecision == "Paper") {
      innerscore += 1;
    }
    if (CompDecision == "Scissors") {
      innerscore -= 0.5;
    }

    // document.getElementById("Score").innerHTML = innerscore;
  }

  document.getElementById("Score").innerHTML = "Score: " + innerscore;
  
}

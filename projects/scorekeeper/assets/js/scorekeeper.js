var player1Button = document.getElementById("p1");
var player1 = document.getElementById("player1");
player1Score = 0;

    player1Button.addEventListener("click", function(){
        player1.innerHTML = player1Score++;
    });

var player2Button = document.getElementById("p2");
var player2 = document.getElementById("player2");
player2Score = 0;

    player2Button.addEventListener("click", function(){
        player2.innerHTML = player2Score++;
    });

var scoreButton = document.querySelector("score");
var score = document.qu("score");
player2Score = 0;

    scoreButton.addEventListener("click", function(){
        score.innerHTML = player2Score++;
    });
// Game structure
// Press S --> Playing = true 
// while playing --> if hover outside "game"--> You Lose!
// if hover over boundery --> You Lose!
// else if hover over E --> You win!


window.onload = function () {

    var boundaries = document.getElementsByClassName("boundary");
    var start = document.getElementById('start');
    var game_prompt = document.getElementById("status");
    var end = document.getElementById('end');
    var score = 0;
    var game = document.getElementById('game');
    var not_playing = false;
    
    var run_maze = function (){
        
        game.addEventListener("mouseleave", you_lost);

        game_prompt.innerHTML = "GAME STARTED";

        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addEventListener("mouseover", you_lost, true);
        }

        if (end.addEventListener("mouseover", you_won, true));
    }

var you_won = function () {
     
    document.body.style.backgroundColor = "lightgreen";
    game_prompt.innerHTML = "YOU WON! Press Space To restart";
    score += 5;
    console.log(score);
    not_playing = true;
    end.removeEventListener("mouseover", you_won, false);
    }

var you_lost = function () {
    for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.add("youlose");// https://stackoverflow.com/a/14101453
  }
    game_prompt.innerHTML = "YOU LOST :( Press Space to restart";
    score -= 10;
    console.log(score);
    not_playing = true;
    
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].removeEventListener("mouseover", you_lost, false);
    }
    }

var reset = function () {
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].classList.remove("youlose");
    }
    document.body.style.backgroundColor = "white";
    game_prompt.innerHTML = 'Begin by moving your mouse over the "S"';


    }

document.addEventListener("keyup", (reset) => {
    if (reset.code === "Space") {
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
    document.body.style.backgroundColor = "white";
    game_prompt.innerHTML = 'Begin by moving your mouse over the "S"';
    score = 0;
    }
});

start.addEventListener('click', ()=>{ //https:stackoverflow.com/a/25028877
    reset();
    run_maze ();
});
};

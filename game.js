window.onload = function () {

    var boundaries = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    var game_prompt = document.getElementById("status");
    var end = document.getElementById("end");
    var score = 0;
    var game = document.getElementById("game");
    var score_display_list = document.getElementsByClassName("example");
    var score_display = score_display_list[0];
    var now = document.getElementById("now");
    var last = document.getElementById("last");
    var best = document.getElementById("best");

var run_maze = function (){
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", you_lost);  
    }
    var seconds=0;
    var timer = setInterval(function () {
        now.innerHTML = seconds++;
    }, 100);

    game.addEventListener("mouseleave", you_lost);

    game_prompt.innerHTML = "GAME STARTED";
    end.addEventListener("mouseover", you_won);
}


var you_won = function () {
    document.body.style.backgroundColor = "lightgreen";
    game_prompt.innerHTML = "YOU WON! Press Space To restart";
    score += 5;
    score_display.innerHTML = "SCORE: " + score
    remove_listeners()
    clearInterval(timer);
    }

var you_lost = function () {
    
    score -= 10;
    document.body.style.backgroundColor = "#ff8888";
    game_prompt.innerHTML = "YOU LOST :( Press Space to restart";
    score_display.innerHTML = "SCORE: " + score
    remove_listeners()
    clearInterval(timer)
}

// GET RID OF UNWANTED LISTENERS

var remove_listeners = function () {

    for (var i = 0; i < boundaries.length; i++) { 
        boundaries[i].removeEventListener("mouseover", you_lost);
    }
    game.removeEventListener("mouseleave", you_lost);
    end.removeEventListener("mouseover", you_won);
    
}

// GAME RESET

var reset = function () {
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].style.backgroundColor = "white";
    }
    
    document.body.style.backgroundColor = "white";
    game_prompt.innerHTML = 'Begin by moving your mouse over the "S"';

    }

// SPACEBAR RESET

document.addEventListener("keyup", (e) => { 
    if (e.code === "Space") {
    reset()
    }
});


// Timer


// START GAME

start.addEventListener('click', ()=>{ //https:stackoverflow.com/a/25028877
    
    reset();
    run_maze ();
});
};

window.onload = function () {

// Graphical Elements

var boundaries = document.getElementsByClassName("boundary");
var start = document.getElementById("start");
var game_prompt = document.getElementById("status");
var end = document.getElementById("end");
var game = document.getElementById("game");
var score_display_list = document.getElementsByClassName("example");
var score_display = score_display_list[0];

// Timers

var now = document.getElementById("now");
var last = document.getElementById("last");
var best = document.getElementById("best");

var score = 0;
let playing = false;

// GAME_STARTED

var run_maze = function () {
    if(playing==true){
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addEventListener("mouseover", you_lost);
            }
        game.addEventListener("mouseleave", you_lost);
        game_prompt.innerHTML = "GAME STARTED";
        end.addEventListener("mouseover", you_won);
        stopwatch()
    }
}

// WIN

var you_won = function () {
    playing = false;
    document.body.style.backgroundColor = "lightgreen";
    game_prompt.innerHTML = "YOU WON! Press Space To restart";
    score += 5;
    score_display.innerHTML = "SCORE: " + score;
    display_time();
    remove_listeners();
    clearInterval(interval);
};

// LOSE

var you_lost = function () {
    playing = false;
    score -= 10;
    document.body.style.backgroundColor = "#ff8888";
    game_prompt.innerHTML = "YOU LOST :( Press Space to restart";
    score_display.innerHTML = "SCORE: " + score;
    display_time();
    remove_listeners();
    clearInterval(interval);
};

// TIMER



function stopwatch() {
    var time_start = Date.now()
    interval = setInterval(function() {
        elapsedTime = Date.now()-time_start;
        var now = document.getElementById("now");
        return now.innerHTML = "Current time: " + "<br>" + (elapsedTime/1000).toFixed(2);
    }, 100);
}

function display_time (){
    best_try = 0;
    last.innerHTML = "Last try: "+ "<br> " + (elapsedTime/1000).toFixed(2);
    if (elapsedTime>best_try) {
        best_try=elapsedTime;
        best.innerHTML = "Best time + <br>" + (best_try/1000).toFixed(2);
    }
}

// GET RID OF UNWANTED LISTENERS

var remove_listeners = function () {
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeEventListener("mouseover", you_lost);
        }
    game.removeEventListener("mouseleave", you_lost);
    end.removeEventListener("mouseover", you_won);
};

// GAME RESET

var reset = function () {
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.backgroundColor = "white";
        }
        document.body.style.backgroundColor = "white";
        game_prompt.innerHTML = 'Begin by moving your mouse over the "S"';
    
};

// SPACEBAR RESET

document.addEventListener("keyup", (e) => {
if (e.code === "Space") {
    score = 0;
    score_display.innerHTML = "SCORE: "+score;
    reset();
    clearInterval(interval)
    }
});

// START GAME

start.addEventListener("click", () => {
    //https:stackoverflow.com/a/25028877
    playing = true
    reset();
    run_maze();
    });
};

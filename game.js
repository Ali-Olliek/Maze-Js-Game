window.onload = function () {

    var boundaries = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    var game_prompt = document.getElementById("status");
    var end = document.getElementById("end");
    var score = 0;
    var game = document.getElementById("game");
    var score_display_list = document.getElementsByClassName("example");
    var score_display = score_display_list[0];
    playing = false;

var run_maze = function (){
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", you_lost);  
    }
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
    }

var you_lost = function () {
    
    score -= 10;
    document.body.style.backgroundColor = "#ff8888";
    game_prompt.innerHTML = "YOU LOST :( Press Space to restart";
    score_display.innerHTML = "SCORE: " + score
    remove_listeners()

}

// GET RID OF UNWANTED LISTENERS

var remove_listeners = function () {

    for (var i = 0; i < boundaries.length; i++) { 
        boundaries[i].removeEventListener("mouseover", you_lost);
    }
    game.removeEventListener("mouseleave", you_lost);
    end.removeEventListener("mouseover", you_won);
    
}

// Calculate time
var get_time = function() {
    if(playing) {
    let time=0;
    setInterval((e) => {
        time++
        console.log(time)
    }, 500);
}
}

// Display Time
var current_time = document.getElementById('now').innerHTML= "This round: "+ get_time();
var best_time = document.getElementById('best').innerHTML = "Best round: " + get_time();
var last = document.getElementById('last').innerHTML = "Last round: " + get_time();
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
    if (e.code === "Space" && playing==false) {
    reset()
    }
});

// START GAME

start.addEventListener('click', ()=>{ //https:stackoverflow.com/a/25028877
    if(!playing) {
    playing=true;
    reset();
    run_maze ();
}
});
};
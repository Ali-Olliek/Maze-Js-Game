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

    
    var run_maze = function (){
        game_prompt.innerHTML = "GAME STARTED";
        for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function(){
         document.body.style.backgroundColor = "red";
         game_prompt.innerHTML = "YOU LOST";
         return
        });
        }
        end.addEventListener("mouseover", function(){
            document.body.style.backgroundColor = "lightgreen";
            game_prompt.innerHTML = "YOU WON";
            return
        })
        
    }

    start.addEventListener('click', run_maze);
};

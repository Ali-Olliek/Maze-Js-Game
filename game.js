// Game structure
// Press S --> Playing = true 
// while playing --> if hover outside "game"--> You Lose!
// if hover over boundery --> You Lose!
// else if hover over E --> You win!

var playing= false;


let boundaries = document.getElementsByName('boundary');
    let start = document.getElementById('start');
    let end = document.getElementById('end');
    let game_prompt = document.getElementById('status');
    let valid_play_ground = document.getElementById('game');

    start.addEventListener("mouseover", function (event) {
        game_prompt.innerHTML = "GAME STARTED";
        playing=true;
        while (playing) {
            boundaries.forEach(element => {
                if(boundaries.addEventListener("mouseover",function(){
                    document.body.style.backgroundColor = 'red',
                    game_prompt.innerHTML = "YOU LOST! :(";
                    playing=false;
                }));
                else if (end.addEventListener("mouseover", function(){
                    document.body.style.backgroundColor = 'lightgreen';
                    game_prompt.innerHTML = "YOU WON!";
                    playing=false;
                }));
            })
        }
    });






// function you_won() {
//     document.body.style.backgroundColor = 'lightgreen';
//     game_prompt.innerHTML = "YOU WON!";
// }

// function you_lost() {
//     return document.body.style.backgroundColor = 'red',
//     game_prompt.innerHTML = "YOU LOST! :(";
// }

//         if (boundaries.mouseover = function(){
//             document.body.style.backgroundColor = 'red';
//             document.getElementById('status').innerHTML = "YOU LOST! :(";
//         }
//         });
//         else if (document.getElementById('end').mouseover= function(){
//             document.body.style.backgroundColor = 'lightgreen';
//             document.getElementById('status').innerHTML = "YOU WON!";
//         });

//     }
// }
// function run_maze() {
//     document.getElementById('status').innerHTML = "GAME STARTED!";
//     start.onclick = start_maze();
// }

// function start_maze() {
//     document.getElementById('status').innerHTML = "GAME STARTED!";
//     // if (document.getElementById('boundaries').onmouseover = you_lost());
    
//     // else if (document.getElementById('end').onmouseover = you_won());
// }


// function you_won() {
//     document.body.style.background = 'lightgreen'
//     document.getElementById('status').innerHTML = "YOU WON!"
//     var win_audio = new Audio('assets/audio/super-mario-bros_DhUAiGM.mp3');
// }

// function you_lost() {
//     document.body.style.background = 'red';
//     document.getElementById('status').innerHTML = "YOU LOST! :(";
//     var lost_audio = new Audio('assets/audio/super-mario-death-sound-sound-effect.mp3');
// }
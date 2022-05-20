// Game structure
// Press S --> Playing = true 
// while playing --> if hover outside "game"--> You Lose!
// if hover over boundery --> You Lose!
// else if hover over E --> You win!

var playing = false;
var boundaries = document.getElementsByClassName('boundary');
var start = document.getElementById('start');
var end = document.getElementById('end')
var status = document.getElementById('status')

start.addEventListener('click', function run_maze() {

});

function you_won() {
    document.body.style.background = 'lightgreen'
    document.getElementById('status').innerHTML = "YOU WON!"
    var win_audio = new Audio('assets/audio/super-mario-bros_DhUAiGM.mp3');
}

function you_lost() {
    document.body.style.background = 'red';
    document.getElementById('status').innerHTML = "YOU LOST! :(";
    var lost_audio = new Audio('assets/audio/super-mario-death-sound-sound-effect.mp3');
}
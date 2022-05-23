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

  var run_maze = function () {
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].addEventListener("mouseover", you_lost);
    }
    game.addEventListener("mouseleave", you_lost);

    game_prompt.innerHTML = "GAME STARTED";
    end.addEventListener("mouseover", you_won);
    stopwatch();
  };

  var you_won = function () {
    playing = false;
    document.body.style.backgroundColor = "lightgreen";
    game_prompt.innerHTML = "YOU WON! Press Space To restart";
    score += 5;
    score_display.innerHTML = "SCORE: " + score;
    stop_timer();
    remove_listeners();
  };

  var you_lost = function () {
    playing = false;
    score -= 10;
    document.body.style.backgroundColor = "#ff8888";
    game_prompt.innerHTML = "YOU LOST :( Press Space to restart";
    score_display.innerHTML = "SCORE: " + score;
    stop_timer();
    remove_listeners();
  };

  // GET RID OF UNWANTED LISTENERS

  var remove_listeners = function () {
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].removeEventListener("mouseover", you_lost);
    }
    game.removeEventListener("mouseleave", you_lost);
    end.removeEventListener("mouseover", you_won);
  };

  function stop_timer() {
    clearInterval(timer);
  }

  // Time

  function stopwatch() {
      var sec = 0;
      timer = setInterval(() => {
        now.innerHTML = "00:" + sec;
        sec++;
      }, 100);
  }

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
      stopwatch = 0;
      score = 0;
      reset();
    }
  });

  // START GAME

  start.addEventListener("click", () => {
    //https:stackoverflow.com/a/25028877
    playing = true;
    reset();
    run_maze();
  });
};

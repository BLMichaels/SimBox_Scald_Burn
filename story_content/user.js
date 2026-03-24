window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();

if(window.slideTimer){
clearInterval(window.slideTimer);
}

var duration = 120; // 2 minutes in seconds
var remaining = duration;

function updateTimer(){
var minutes = Math.floor(remaining / 60);
var seconds = remaining % 60;

if(seconds < 10){
seconds = "0" + seconds;
}

player.SetVar("TimerDisplay", minutes + ":" + seconds);
}

updateTimer();

window.slideTimer = setInterval(function(){

var paused = player.GetVar("TimerPaused");

if(!paused){

remaining--;

if(remaining <= 0){
remaining = 0;
updateTimer();
clearInterval(window.slideTimer);
return;
}

updateTimer();

}

},1000);
}

window.Script2 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script3 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script4 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script5 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script6 = function()
{
  var player = GetPlayer();

// START ONLY ON FIRST SLIDE ENTER IN THIS SCENE
if (!window.scene5TimerActive) {

    // mark that the scene timer has begun
    window.scene5TimerActive = true;

    // reset timer to full start value
    player.SetVar("Time5Remaining", player.GetVar("Time5StartValue"));

    // stop any old interval
    if (window.timer5Interval) {
        clearInterval(window.timer5Interval);
        window.timer5Interval = null;
    }

    function startTimer5() {

        function updateCountdown5() {
            var player = GetPlayer();
            var timeRemaining5 = player.GetVar("Time5Remaining");

            if (timeRemaining5 >= 0) {

                var minutes = Math.floor(timeRemaining5 / 60);
                var seconds = timeRemaining5 % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("Timer5Text", formatted);

                timeRemaining5--;
                player.SetVar("Time5Remaining", timeRemaining5);

            } else {
                player.SetVar("Timer5Text", "00:00");
                clearInterval(window.timer5Interval);
                window.timer5Interval = null;
                window.scene5TimerActive = false; // allow restart next time scene is entered
            }
        }

        window.timer5Interval = setInterval(updateCountdown5, 1000);
    }

    startTimer5();
}

}

window.Script7 = function()
{
  var player = GetPlayer();
var timeRemaining = player.GetVar("TimeRemaining");
var timerStarted = player.GetVar("TimerStarted");

// Only start once
if (!window.timerIsRunning && timeRemaining > 0) {
    window.timerIsRunning = true;
    player.SetVar("TimerStarted", true);

    function updateCountdown() {
        // Check if base layer is visible before updating
        var isBaseLayerVisible = player.GetVar("IsBaseLayerVisible");

        if (timeRemaining >= 0 && window.timerIsRunning) {
            if (isBaseLayerVisible) {
                // Only decrement when base layer is visible
                var minutes = Math.floor(timeRemaining / 60);
                var seconds = timeRemaining % 60;
                var formatted = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

                player.SetVar("TimerText", formatted);
                player.SetVar("TimeRemaining", timeRemaining);

                timeRemaining--;
            }

            // Check again after 1 second
            setTimeout(updateCountdown, 1000);
        } else if (timeRemaining < 0) {
            // Timer finished
            player.SetVar("TimerText", "00:00");
            window.timerIsRunning = false;

            // Optional: trigger end behavior
            // player.SetVar("TimeUp", true);
        }
    }

    updateCountdown();
}

}

};

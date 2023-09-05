t5.innerHTML = '<label for="timerInput">Set Timer Countdown (in minutes)</label>' +
    '<input type="number" id="timerInput">' +
    '<button id="startButton">Start Countdown</button>' +
    '<button id="pauseButton">⏸ / ▶</button>' +
    '<p id="timerDisplay"></p>';

var countDown;
var countSec = 0;
var countMin = 0;

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("pauseButton").addEventListener("click", pauseTimer);

var countDown;
var countDownActive = false;

function startTimer() {
    if (t5.getElementsByTagName("input")[0].value > 0){
        countMin = (t5.getElementsByTagName("input")[0].value)
        countSec = 0
    }

    if (!countDownActive && t5.getElementsByTagName("input")[0].value != "") {
        countDown = setInterval(startCountdown, 1000);
        t5.getElementsByTagName("input")[0].value = ""
    }
}

function startCountdown() {
    
    countDownActive = true;
    t5.getElementsByTagName("p")[0].innerHTML = `${countMin}:${countSec}`
    countSec--
    if (countSec < 10) {
        countSec =  "0" + countSec
    }

    if (countSec == "0-1") {
        countSec = 59;
        countMin--
    }

    if (countMin === 0 && countSec === 0) {
        clearInterval(countDown);
        alert("Time's up!");
    }
}

function pauseTimer() {
    if (countDownActive) {
        clearInterval(countDown)
        countDownActive = false;
    } else {
        countDown = setInterval(startCountdown, 1000);
        countDownActive = true;
    } 
}
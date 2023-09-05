t5.innerHTML+=`
<label for="numTimerInput">set timer up</label>
<input id='numTimerInput' type="text">
<button id="startBtn">start</button>
<button id="pauseBtn">pause</button>
<button id="continueBtn">continue</button>
<p id='timer'></p>
`
startBtn.addEventListener('click',startTimer)
pauseBtn.addEventListener('click',pauseTimer)
continueBtn.addEventListener('click',continueTimer)

var countDown;
var countSec=0;
var countMin=0;
var countDownActive = false;
console.log(!countDownActive);
function startTimer() {
    if(t5.getElementsByTagName("input")[0].value > 0){
        countMin=t5.getElementsByTagName("input")[0].value
        countSec = 0
    }

    if (!countDownActive&& t5.getElementsByTagName("input")[0].value != "") {
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
    if(countDownActive){
        clearInterval(countDown)
        countDownActive = false;
    }
}
function continueTimer() {
    if(!countDownActive)
    {
        countDown = setInterval(startCountdown, 1000);
        countDownActive = true 
    }
}
//make pause and continue the same btn

//function pauseTimer() {
//     if (countDownActive) {
//         clearInterval(countDown)
//         countDownActive = false;
//     } else {
//         countDown = setInterval(startCountdown, 1000);
//         countDownActive = true;
//     } 
// }


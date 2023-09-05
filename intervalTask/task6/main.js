task6.innerHTML+=`
<label for="AlarmClockInpt">set time to wake up</label>
<input id='AlarmClockInpt' type="time">
<button id="pauseStartButton">pause /continue </button>
 <p id='timeLeftToAlert'></p>
`
console.log(AlarmClockInpt.value);
pauseStartButton.addEventListener("click",startAndPauseCountDown)
AlarmClockInpt.addEventListener('input',pauseCountDown)
var mainInterval;
var isCountDownOn=false;
function startAndPauseCountDown() {
    if(isCountDownOn==true){//if the counter start stop him
        clearInterval(mainInterval)
        isCountDownActive = false;
    }
    else{//if the counter isn't on start him
        mainInterval = setInterval(printTime, 1000)
        isCountDownActive = true;//mean now the counter is on the counter
    }
}

function pauseCountDown() {//to restart the counter 
    clearInterval(mainInterval)
    isCountDownActive = false;
}

function printTime() {
    timeLeftToAlert.innerHTML=`
    ${timeWakeUp()}`
}

function timeWakeUp() {
    //two times
    var nowTime= new Date();
    var userTime= new Date(nowTime);
    //get the time left from user input
    userTime.setHours(getHoursFromUser(),getMinutesFromUser(),0)
    var timeLeft=userTime.getTime()-nowTime.getTime()
    //hours left
    var hoursleft = Math.floor(timeLeft/1000/60/60)
    timeLeft -= hoursleft*60*60*1000
    console.log(hoursleft);
    //minutes left
    var minutesLeft = Math.floor(timeLeft/1000/60)
    timeLeft -= minutesLeft*60*1000
    
    //second left
    var secondsLeft = Math.floor(timeLeft/1000)
    timeLeft -= secondsLeft*1000
    
    if(hoursleft==0 && minutesLeft==0 && secondsLeft==0){
        alert('time to wake up!')
        pauseCountDown()
    }
    if (hoursleft < 0) {
        return `Time Left: ${24+hoursleft}:${minutesLeft}:${secondsLeft}`
    }
    return `Time Left: ${hoursleft}:${minutesLeft}:${secondsLeft}`
}

function getHoursFromUser() {
    var hoursInput=AlarmClockInpt.value.substring(0, AlarmClockInpt.value.indexOf(":"));
    return parseInt(hoursInput);
}
function getMinutesFromUser() {
    var minutesInput=AlarmClockInpt.value.substring(AlarmClockInpt.value.indexOf(':')+1,(AlarmClockInpt.value.length))
    return parseInt(minutesInput);
}


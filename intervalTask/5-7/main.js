document.body.innerHTML+=`
<div id='mainDiv'></div>`
document.body.innerHTML+=`<div id='secondDiv'></div>`

mainDiv.innerHTML+=`
<input id='ipnutUser' type='number'>`
var num;  
var num2  
var timerUser=setInterval(printTimerMinutes,1000)
// var timerUserLeft=setInterval(printTimerMinutesLeft,1000)
ipnutUser.addEventListener('change',getMinutes)
function getMinutes() {
    num=ipnutUser.value
    timerUser
     
}
 function contineuTimer(){
        setInterval(printTimerMinutes,1000)
    } 
function printTimerMinutes() {
    if(num>0){
         mainDiv.innerHTML=`
    ${--num}`
    }
}
// function printTimerMinutesLeft(){
//     if(timeLeft>0){
//         mainDiv.innerHTML=`
//         ${--timeLeft}`
//     }
// }

secondDiv.innerHTML=`<br><button id='deleteTimer' onclick='deleteInterval()'>stop</button>
<br><button id='continueBtn' >continue</button>`

function deleteInterval() {clearInterval(timerUser)}
continueBtn.addEventListener('click',contineuTimer)
// var continueUser= setInterval(printTimerMinutesContinue,1000)

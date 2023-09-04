document.body.innerHTML+=`
<div id='mainDiv'></div>`
document.body.innerHTML+=`<div id='secondDiv'></div>`

mainDiv.innerHTML+=`
<input id='ipnutUser' type='number'>`
var num;    
var timerUser=setInterval(printTimerMinutes,1000)
// var timerUserLeft=setInterval(printTimerMinutesLeft,1000)
ipnutUser.addEventListener('change',getMinutes)
function getMinutes() {
    num=ipnutUser.value
    timerUserף
     
}
//  function contineuTimer(){
//         var timeLeft=num
//         timerUserLeft
//     } 
function printTimerMinutes() {
    if(ipnutUser.value>0){
         mainDiv.innerHTML=`
    ${--ipnutUser.value}`
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
continueBtn.addEventListener('click',printTimerMinutes)
// var continueUser= setInterval(printTimerMinutesContinue,1000)

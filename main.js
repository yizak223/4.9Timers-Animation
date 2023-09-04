document.body.innerHTML+=`
<div id='mainDiv'></div>`
document.body.innerHTML+=`<div id='secondDiv'></div>`

mainDiv.innerHTML+=`
<input id='ipnutUser' type='number'>`
var num;    
var timerUser=setInterval(printTimerMinutes,1000)
ipnutUser.addEventListener('change',getMinutes)
function getMinutes() {
    num=ipnutUser.value
    timerUser
}
function printTimerMinutes() {
    if(num>0){
        console.log(num);
         mainDiv.innerHTML=`
    ${--num}`
    }
}


secondDiv.innerHTML=`<br><button id='deleteTimer' onclick='deleteInterval()'>stop</button>`
function deleteInterval() {clearInterval(timerUser)}


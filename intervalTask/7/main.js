t6.innerHTML+=`
<button id="printBtn">prrint you are in the website</button>
<button id="restart">restart</button>
<p id="displayArea"></p>
`
printBtn.addEventListener('click',strattt)
restart.addEventListener('click',restartPrint)

var printOn=false;
// var theSecIsRising=true;
var sec=0
var printInterval;

function strattt() {
    if (printOn==false) {
       printInterval = setInterval(printUinWebsite,1000)
       printOn=true
    //    theSecIsRising=true
    }
    else{
        clearInterval(printInterval)
        printOn=false
        // theSecIsRising=true
    }
}  

function printUinWebsite() {
        displayArea.innerHTML+=`
        <p>you are in the website ${++sec}</p>`
}
function restartPrint() {
    displayArea.innerHTML=``
    sec=0;

}
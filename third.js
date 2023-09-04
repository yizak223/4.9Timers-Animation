var intervalid=setInterval(moveRight,10)
var counter=0;
function moveRight() {
    box.style.left=`
    ${++counter}px`;
    if(counter==150)
    {
        clearInterval(intervalid)
        counter=0;
        intervalid=setInterval(moveDown,10)
    }
}
function moveDown() {
    box.style.top=`${++counter}px`;
    if(counter==150)
    {
        clearInterval(intervalid)
        intervalid=setInterval(moveLeft,10)
    }
}
function moveLeft() {
    box.style.left=`${--counter}px`;
    if(counter==0){
        clearInterval(intervalid)
        counter=150
        intervalid=setInterval(moveup,10)
    }
}
function moveup() {
    box.style.top=`${--counter}px`;
    if(counter==0){
        clearInterval(intervalid)
        counter=0
        intervalid=setInterval(moveDownSecond,10)
    }   
}
function moveDownSecond() {
    box.style.top=`${++counter}px`;
    if(counter==150)
    {
        clearInterval(intervalid)
        counter=0
        intervalid=setInterval(moveRightSecond,10)
    }
}
function moveRightSecond() {
    box.style.left=`
    ${++counter}px`;
    if(counter==150)
    {
        clearInterval(intervalid)
        counter=150;
        intervalid=setInterval(moveupSecond,10)
    }
}
function moveupSecond() {
    box.style.top=`${--counter}px`;
    if(counter==0){
        clearInterval(intervalid)
        counter=150
        intervalid=setInterval(moveLeftsecond,10)
    }   
}
function moveLeftsecond() {
    box.style.left=`${--counter}px`;
    if(counter==0){
        clearInterval(intervalid)
        counter=0
        intervalid=setInterval(moveRight,10)
    }
}
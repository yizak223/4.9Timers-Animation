//1
document.body.innerHTML += `
<div id='mainDiv'></div`

setInterval(printTimer,1000)
function printTimer() {
    mainDiv.innerHTML+=`
    <p>timer</p>`
}
//2
setInterval(printCounter, 6000)
function printCounter() {
    mainDiv.innerHTML = `
    <p>counter</p>
    `
}
//3
var intervalPrint = setInterval(printIlove, 1000)
function printIlove() {
    mainDiv.innerHTML += `
    <p>i love timers</p>
    `
}
mainDiv.innerHTML += `
<button id='delete_PRINT' onclick='deleteInterval()'>delete<butoon>
`
function deleteInterval() { clearInterval(intervalPrint) }
//4
console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);
setInterval(printTIme,1000)
function printTIme() {
    mainDiv.innerHTML+=`
    ${new Date().getHours()}:${new Date().getMinutes()}
    `
}





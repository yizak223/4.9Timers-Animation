//1
document.body.innerHTML += `
<div id='mainDiv'></div`
// setInterval(printTimer,1000)
// function printTimer() {
//     mainDiv.innerHTML+=`
//     <p>timer</p>`
// }
//2
// setInterval(printCounter, 6000)
// function printCounter() {
//     mainDiv.innerHTML = `
//     <p>counter</p>
//     `
// }
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

// delete_PRINT.addEventListener('click',deleteInterval)
function deleteInterval() { clearInterval(intervalPrint) }
//
document.body.innerHTML += `
<div id='mainDiv'></div>
`
// //1
// setTimeout(printName, 1000)

// function printName() {
//     mainDiv.innerHTML += `
//     <p>yizak</p>`
// }
// //2
// setTimeout(printHellow, 5000)
// function printHellow() {
//     mainDiv.innerHTML = `
//     <p>hellow</p>
//     `
// }
// mainDiv.innerHTML = `
//     <p>bye</p>
//     `
// //3
// setTimeout(printTime,1000)

// function printTime() {
//     var time= new Date()
//     mainDiv.innerHTML +=`
//     <span>${time.getHours()}</span>
//     `
// }
//4
var timeoutText=setTimeout(printText,2000)

function printText() {
    mainDiv.innerHTML +=`
    <p>i love timers</p>
    `
}

mainDiv.innerHTML+=
`<button id='deleteSpan'>delete</button>`
deleteSpan.addEventListener('click',function () {clearTimeout(timeoutText)})

//5
mainDiv.innerHTML+=`
<h1 id='title4' style='color:blue'>title</h1>
`
function colorRed() {
    title4.style=`color:red`
}
setTimeout(colorRed,3000)

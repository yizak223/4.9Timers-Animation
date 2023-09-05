t8.innerHTML+=`
<button id='startPrint'>print names</button>
<p id='displayNames'></p>
`
startPrint.addEventListener('click',startInterval)
var printOn=false

var arrayNames=[]
for (let i = 0; i < 23; i++) {
    arrayNames[i]=`name${i}`
}
console.log(arrayNames);
function printNames() {
    var numRandom=  Math.floor((Math.random()*23))
    displayNames.innerHTML+=
    `
    <p>${arrayNames[numRandom]}</p>
    `
}
var mainInterva
function startInterval() {
    if(printOn==false){
        mainInterval= setInterval(printNames,1000)
        printOn=true
    }
    else{
        clearInterval(mainInterval)
        printOn=false
    }
    
}
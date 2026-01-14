const button = document.querySelector("button")
const img = document.querySelector("img")
let gameInterval  // gibt quasi eine ID, eine Nummer im Code, die man später auch aufrufen und bearbeiten kann
let counter = 100

function startGame () {
    // startet loop, führt funktion jede Sekunde aus
    gameInterval = setInterval(moveMouse, 1000)
}

function moveMouse(){
    if (counter === 0) stopGame()

    // bei jeder Ausführung die Maus anderswo platzieren
    const x = Math.random() * (window.innerWidth - 250)
    const y = Math.random() * (window.innerHeight - 250)

    img.style.left = x  + "px"
    img.style.top = y  + "px"

    counter = counter - 10
}

function stopGame () {
    clearInterval(gameInterval)
    if(counter === 0){
        alert("Time's up, die Käse ist aufgefressen!")
    }
    else alert ("Super, du hast die Käse gerettet")
}

button.addEventListener("click", startGame)
img.addEventListener("click", stopGame)
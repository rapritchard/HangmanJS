'use strict'

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done 

const puzzleElement = document.querySelector("#puzzle-word")
const guessElement = document.querySelector("#guess-count")

const renderGame = (game) => {
    puzzleElement.textContent = ""
    puzzleElement.textContent = game.puzzle
    guessElement.textContent = game.statusMessage
}

const game = new Hangman("Car Parts", 2)
renderGame(game)

window.addEventListener("keypress", (e) =>{
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    game.calculateStatus()
    renderGame(game)
})

getPuzzle("4").then((puzzle) =>{
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name)
}).catch((err) =>{
    console.log(`Error: ${err}`)
})
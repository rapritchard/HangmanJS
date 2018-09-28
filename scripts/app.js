'use strict'

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done 

const puzzleElement = document.querySelector("#puzzle-word")
const guessElement = document.querySelector("#guess-count")

let game

window.addEventListener("keypress", (e) =>{
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    game.calculateStatus()
    renderGame()
})

const renderGame = () => {
    puzzleElement.textContent = game.puzzle
    guessElement.textContent = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game = new Hangman(puzzle, 5)
    renderGame()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()

// getPuzzle("3").then((puzzle) =>{
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })
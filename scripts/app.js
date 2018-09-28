'use strict'

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done 

const puzzleElement = document.querySelector("#puzzle")
const guessElement = document.querySelector("#guess-count")
const wordCountElement = document.querySelector(".word-count")

const wordCountOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

wordCountOptions.forEach((option) => {
    const num = option
    const numOption = document.createElement("option")
    numOption.textContent = num
    numOption.value = num
    wordCountElement.appendChild(numOption)
})

let game
const renderGame = () => {
    puzzleElement.innerHTML= ""
    guessElement.textContent = game.statusMessage

    game.puzzle.split("").forEach((letter) => {
        const letterElement = document.createElement("span")
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle(wordCountElement.value)
    game = new Hangman(puzzle, 5)
    renderGame()
}

window.addEventListener("keypress", (e) =>{
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    game.calculateStatus()
    renderGame()
})

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
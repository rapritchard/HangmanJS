'use strict'

const puzzleElement = document.querySelector("#puzzle-word")
const guessElement = document.querySelector("#guess-count")

const renderGame = function(game){
    puzzleElement.textContent = ""
    puzzleElement.textContent = game.puzzle
    guessElement.textContent = game.statusMessage
}

const game = new Hangman("Cat", 2)
renderGame(game)

window.addEventListener("keypress", function(e){
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    game.calculateStatus()
    renderGame(game)
})
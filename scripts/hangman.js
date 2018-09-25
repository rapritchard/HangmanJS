'use strict'

const Hangman = function(wordToGuess, attempts){
    this.wordToGuess = wordToGuess.toLowerCase().split("")
    this.attempts = attempts
    this.guessedLetters = []
    this.status = "playing"
}

Hangman.prototype.getPuzzle = function(){
    let hiddenWord = ""

    this.wordToGuess.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === " "){
            hiddenWord += letter
        }else{
            hiddenWord += "*"
        }
    })
    return hiddenWord
}

Hangman.prototype.makeGuess = function(guess){
    if(this.status === "playing")
    {
        guess = guess.toLowerCase()
        // If the guess is unique
        if(!this.guessedLetters.includes(guess)){
            this.guessedLetters.push(guess)
            // If the unique guess is not part of the word to guess, reduce attempts
            if(!this.wordToGuess.includes(guess)){
                this.attempts--
            }
        }
    }

}

Hangman.prototype.calculateStatus = function(){
    let finished = this.wordToGuess.every((letter) => this.guessedLetters.includes(letter))

    if(this.attempts === 0){
        this.status = "failed"
    }else if(finished){
        this.status = "finished"
    }else{
        this.status = "playing"
    }
}

Hangman.prototype.currentStatus = function(){
    if(this.status === "failed"){
        return `Nice try! The word was "${this.wordToGuess.join("")}".`
    }else if(this.status === "finished"){
        return "Great work! You guess the word."
    }else{
        return `Guesses left: ${this.attempts}`
    }
}
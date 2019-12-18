class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'Playing';
    };

    getStatus() {

        const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ');

        if (this.remainingGuesses === 0) {
            this.status = 'Failed';
        } else if (finished) {
            this.status = 'Finished';
        } else {
            this.status = 'Playing';
        }

    };

    getStatusMessage() {
        if (this.status === 'Playing'){
            return `Guess Left: ${this.remainingGuesses}.`;
        }else if(this.status === 'Failed'){
            return `Nice Try! The Word Was "${this.word.join('')}".`;
        }else{
            return `Great Work! You Guessed It Right.`;
        }
    };

    getPuzzle() {
        let puzzle = '';

        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        });

        return puzzle;
    };


    makeGuess(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (this.status !== 'Playing'){
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.getStatus();

    };

}

export default Hangman;
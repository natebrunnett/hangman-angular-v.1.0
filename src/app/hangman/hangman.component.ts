import { Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent {
  word = 'angular'; // You can replace this with a random word generator logic
  guessedLetters: string[] = [];
  maxAttempts = 6;
  attemptsLeft = this.maxAttempts;

  guess(letter: string) {
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters.push(letter);
      if (!this.word.includes(letter)) {
        this.attemptsLeft--;
      }
    }
  }

  isGameOver(): boolean {
    return this.isWordGuessed() || this.attemptsLeft === 0;
  }

  isWordGuessed(): boolean {
    return this.word.split('').every(letter => this.guessedLetters.includes(letter));
  }

  resetGame() {
    this.word = 'angular'; // Reset word (you may want to randomize it)
    this.guessedLetters = [];
    this.attemptsLeft = this.maxAttempts;
  }
}

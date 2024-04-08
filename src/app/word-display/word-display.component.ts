import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.css']
})
export class WordDisplayComponent {
  @Input() word: string = '';
  @Input() guessedLetters: string[] = [];

  getDisplayWord(): string {
    return this.word.split('').map(letter =>
      this.guessedLetters.includes(letter) ? letter : '_'
    ).join(' ');
  }
}


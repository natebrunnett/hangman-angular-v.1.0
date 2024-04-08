import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordDisplayModule } from './word-display/word-display.module';
import { HangmanModule } from './hangman/hangman.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordDisplayModule, HangmanModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hang-man-v2';
}

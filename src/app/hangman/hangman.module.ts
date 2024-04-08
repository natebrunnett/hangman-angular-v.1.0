import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanComponent } from './hangman.component';
import { WordDisplayModule } from '../word-display/word-display.module';
@NgModule({
  declarations: [HangmanComponent], 
  imports: [
    CommonModule,
    WordDisplayModule
  ],
  exports: [
    HangmanComponent
  ]
})
export class HangmanModule { }

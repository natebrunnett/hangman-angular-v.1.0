import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDisplayComponent } from './word-display.component';


@NgModule({
  declarations: [WordDisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [WordDisplayComponent] 
})
export class WordDisplayModule { }

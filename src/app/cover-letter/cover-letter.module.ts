import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverLetterComponent } from './cover-letter.component';



@NgModule({
  declarations: [CoverLetterComponent],
  imports: [
    CommonModule
  ],
  exports: [CoverLetterComponent]
})
export class CoverLetterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailsComponent } from './thumbnails.component';

@NgModule({
  declarations: [ThumbnailsComponent],
  imports: [CommonModule],
  exports: [ThumbnailsComponent],
})
export class ThumbnailsModule {}

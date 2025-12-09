import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  imports: [],
  templateUrl: './image-loader.html',
  styleUrl: './image-loader.scss',
})
export class ImageLoader {
  @Input() src!: string;
  @Input() className = '';

  loaded = false;
}

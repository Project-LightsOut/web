import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/Post';
import { ImageLoader } from "../image-loader/image-loader";
import * as AOS from 'aos';
import BiggerPicture from 'bigger-picture';
import { DatePipe } from '@angular/common';
import { ImageItem } from '../model/ImageItem';

@Component({
  selector: 'app-poster-detail',
  imports: [ImageLoader, DatePipe],
  templateUrl: './poster-detail.html',
  styleUrl: './poster-detail.scss',
})
export class PosterDetail implements OnInit {


  private readonly router = inject(Router);

  post: Post | null = null;
  items: ImageItem[] = [];
  bp = BiggerPicture({
    target: document.body
  });

  ngOnInit() {
    const state = history.state as { post?: Post };

    if (!state?.post) {
      this.router.navigate(['/']);
      return;
    }

    this.post = new Post(
      state.post.id,
      state.post.title,
      state.post.description,
      state.post.publicationDate,
      state.post.category,
      state.post.images
    );


    this.buildItems().then(items => {
      this.items = items.map(item => ({
        img: item.img,
        width: item.width,
        height: item.height,
        alt: item.title ?? '',
        title: item.title ?? ''
      }));
  
      AOS.init();
    });
  }

  async buildItems() {
    if (!this.post?.images) return [];

    return Promise.all(
      this.post.images.map(async (img) => {
        const { w, h } = await this.getImageSize(img);
        return {
          img,
          width: w,
          height: h,
          alt: this.post?.title || 'image',
          title: this.post?.title
        };
      })
    );
  }

  getImageSize(url: string): Promise<{ w: number, h: number }> {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
      img.src = url;
    });
  }

  open(index: number) {
    this.bp.open({
      position: index,
      items: this.items
    });
  }

  goBack() {
    this.router.navigate(['/posters']);
  }
}
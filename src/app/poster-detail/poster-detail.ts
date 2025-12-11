import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/Post';
import { BiggerPictureInstance } from 'bigger-picture';
import { ImageLoader } from "../image-loader/image-loader";
import * as AOS from 'aos';

@Component({
  selector: 'app-poster-detail',
  imports: [ImageLoader],
  templateUrl: './poster-detail.html',
  styleUrl: './poster-detail.scss',
})
export class PosterDetail implements OnInit {
  readonly examplePost = new Post(
    1,
    'Quantum Neural Interface Prototype',
    'Revolutionary interface combining quantum computing with neural networks for unprecedented brain-machine communication speeds. This prototype demonstrates the future of human-AI symbiosis with real-time thought processing capabilities.',
    '2024-01-15',
    'quantum',
    [
      "https://pbs.twimg.com/media/Gx8yea1WMAAknNj?format=jpg&name=large",
      "https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096",
      "https://pbs.twimg.com/media/G64RB24WoAA1pNy?format=jpg&name=large",
      "https://pbs.twimg.com/media/G6tm73JXUAAJ4Ey?format=jpg&name=large",
      "https://pbs.twimg.com/media/G6kBCoOXsAAxptq?format=jpg&name=large"
    ]
  );
  post: Post | null = null;
  items: any[] = [];
  private posts: Post[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.loadPost(id);
    AOS.init();
    
    this.post = this.examplePost;
  }

  async loadPost(id: string | number) {
    // Cargar post desde tu servicio o array
    this.post = this.posts.find(p => p.id === +id) || null;

    if (this.post?.images?.length) {
      this.items = await this.buildItems();
    }
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
    if (this.items.length > 0) {

    }
  }

  goBack() {
    this.router.navigate(['/posters']);
  }
}
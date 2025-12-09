import { Component, OnInit } from '@angular/core';
import { ImageLoader } from "../image-loader/image-loader";
import BiggerPicture from 'bigger-picture';

@Component({
  selector: 'app-home',
  imports: [ImageLoader],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  bp = BiggerPicture({
    target: document.body
  });

  items: any[] = [];

  readonly mainImages: string[] = [
    "/assets/images/mainBanner_1.png",
    "/assets/images/mainBanner_2.png",
    "/assets/images/mainBanner_3.png",
    "/assets/images/mainBanner_4.png",
    "/assets/images/mainBanner_5.png"
  ];

  lastImages: string[] = [
    "https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500",
    "https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large",
    "https://pbs.twimg.com/media/Gx8yea1WMAAknNj?format=jpg&name=large",
    "https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/G64RB24WoAA1pNy?format=jpg&name=large",
    "https://pbs.twimg.com/media/G6tm73JXUAAJ4Ey?format=jpg&name=large",
    "https://pbs.twimg.com/media/G6kBCoOXsAAxptq?format=jpg&name=large",
    "https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large",
    "https://pbs.twimg.com/media/G5XBAicWEAALHJ-?format=jpg&name=large",
    "https://pbs.twimg.com/media/G10PCfyWwAAfLkj?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GxEKz20XcAArxWq?format=jpg&name=large"
  ];

  scrollToGallery() {
    const el = document.getElementById('showcase');
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  async ngOnInit() {
    this.items = await this.buildItems();
  }


  open(index: number) {
    this.bp.open({
      position: index,
      items: this.items
    });
  }


  async buildItems() {
    return Promise.all(
      this.lastImages.map(async img => {
        const { w, h } = await this.getImageSize(img);

        return {
          img,
          width: w,
          height: h,
          alt: 'imagen'
        };
      })
    );
  }


  getImageSize(url: string): Promise<{w:number,h:number}> {
    return new Promise(resolve => {
      const img = new Image();

      img.onload = () =>
        resolve({
          w: img.naturalWidth,
          h: img.naturalHeight
        });

      img.src = url;
    });
  }
  
}

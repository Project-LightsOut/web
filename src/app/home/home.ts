import { Component, inject, OnInit } from '@angular/core';
import { ImageLoader } from "../image-loader/image-loader";
import BiggerPicture from 'bigger-picture';
import { CloudDataService } from '../cloud-data-service';
import { ImageItem } from '../model/ImageItem';

@Component({
  selector: 'app-home',
  imports: [ImageLoader],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  private readonly cloudService = inject(CloudDataService);

  bp = BiggerPicture({
    target: document.body
  });

  items: ImageItem[] = [];

  readonly mainImages: string[] = [
    "/assets/images/mainBanner_1.png",
    "/assets/images/mainBanner_2.png",
    "/assets/images/mainBanner_3.png",
    "/assets/images/mainBanner_4.png",
    "/assets/images/mainBanner_5.png"
  ];

  lastImages: string[] = [];

  scrollToGallery() {
    const el = document.getElementById('showcase');
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  ngOnInit() {
    this.cloudService.getCloudData().subscribe(async data => {
      const firstTenPosts = data.posts.slice(0, 10);
      this.lastImages = firstTenPosts
        .map(p => p.images.length > 0 ? `${data.baseUrl}${p.images[0]}` : null)
        .filter(img => img !== null);

      this.buildItems().then(items => {
        this.items = items.map(item => ({
          img: item.img,
          width: item.width,
          height: item.height,
          alt: item.alt,
          title: item.title
        }));
      });
    });
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
          alt: 'imagen',
          title: ''
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

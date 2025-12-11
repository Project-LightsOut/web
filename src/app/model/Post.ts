export class Post {
  id: number;
  title: string;
  description: string;
  publicationDate: string;
  category: string;
  images: string[];

  constructor(
    id: number,
    title: string,
    description: string,
    publicationDate: string,
    category: string,
    images: string[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.publicationDate = publicationDate;
    this.category = category;
    this.images = images;
  }

  getImageCount(): number {
    return this.images.length;
  }
}
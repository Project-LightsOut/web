import { Post } from "./Post";

export class CloudData {
  baseUrl: string;
  categories: string[];
  posts: Post[];
  constructor(baseUrl: string, categories: string[], posts: Post[]) {
    this.baseUrl = baseUrl;
    this.categories = categories;
    this.posts = posts;
  }
}
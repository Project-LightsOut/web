import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { ImageLoader } from "../image-loader/image-loader";

@Component({
  selector: 'app-posters',
  imports: [ImageLoader],
  templateUrl: './posters.html',
  styleUrl: './posters.scss',
})
export class Posters implements OnInit {
  // Sample data - replace with your actual data source
  posts: Post[] = [
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),
    new Post(1, 'Robot Prototype', 'Advanced AI robot prototype', '2024-01-15', 'robotics', ['https://pbs.twimg.com/profile_banners/1447588358071504898/1758074227/1500x500']),
    new Post(2, 'Neural Network', 'Deep learning architecture', '2024-01-14', 'ai', ['https://pbs.twimg.com/media/G1QPHrpXoAA9Zig?format=jpg&name=large']),
    new Post(3, 'Quantum Computer', 'Next generation computing', '2024-01-13', 'quantum', ['https://pbs.twimg.com/media/G3BdW2mXQAAo9-q?format=jpg&name=4096x4096']),
    new Post(4, 'Cyborg Design', 'Human-machine interface', '2024-01-12', 'cyborg', ['https://pbs.twimg.com/media/G6PTxt2XQAATqzw?format=jpg&name=large']),

    // Add more posts as needed
  ];

  categories: string[] = ['robotics', 'ai', 'quantum', 'cyborg'];
  selectedCategory: string = '';
  searchQuery: string = '';
  filteredPosts: Post[] = [];
  
  // Pagination
  currentPage: number = 1;
  pageSize: number = 15;
  totalPages: number = 1;

  ngOnInit() {
    this.filteredPosts = [...this.posts];
    this.updatePagination();
  }

  selectCategory(category: string) {
    this.selectedCategory = this.selectedCategory === category ? '' : category;
    this.currentPage = 1;
    this.filterPosts();
  }

  clearCategory() {
    this.selectedCategory = '';
    this.currentPage = 1;
    this.filterPosts();
  }

  onSearchChange() {
    this.currentPage = 1;
    this.filterPosts();
  }

  performSearch() {
    this.currentPage = 1;
    this.filterPosts();
  }

  filterPosts() {
    this.filteredPosts = this.posts.filter(post => {
      const matchesCategory = !this.selectedCategory || post.category === this.selectedCategory;
      const matchesSearch = !this.searchQuery || 
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredPosts.length / this.pageSize);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
  }

  getCurrentPagePosts(): Post[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredPosts.slice(startIndex, endIndex);
  }

  getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (this.currentPage > 3) {
        pages.push('...');
      }
      
      const start = Math.max(2, this.currentPage - 1);
      const end = Math.min(this.totalPages - 1, this.currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (this.currentPage < this.totalPages - 2) {
        pages.push('...');
      }
      
      pages.push(this.totalPages);
    }
    
    return pages;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  clearFilters() {
    this.selectedCategory = '';
    this.searchQuery = '';
    this.currentPage = 1;
    this.filterPosts();
  }

  openImage(post: Post) {
    // Implement your image opening logic here
    console.log('Opening image:', post);
  }

  getCategoryButtonClass(category: string): string {
    const baseClass = 'px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ';
    if (this.selectedCategory === category) {
      return baseClass + 'bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 shadow-yellow-500/20';
    }
    return baseClass + 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 text-gray-300 hover:text-white hover:shadow-yellow-500/10';
  }

  getPaginationButtonClass(isDisabled: boolean): string {
    const baseClass = 'px-4 py-2 rounded-lg font-medium transition-all duration-300 ';
    if (isDisabled) {
      return baseClass + 'bg-gradient-to-br from-gray-900 to-gray-950 text-gray-600 cursor-not-allowed border border-gray-800/50';
    }
    return baseClass + 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 text-gray-300 hover:text-white hover:border-yellow-500/30 hover:shadow-lg';
  }
}
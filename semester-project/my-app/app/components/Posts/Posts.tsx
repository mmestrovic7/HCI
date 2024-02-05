"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import PostClosed from '@/app/components/PostClosed/PostClosed';
import FilterButton from '@/app/components/FilterButton/FilterButton';
import { Post } from '@/app/content';
import '../../composition.css';

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterButtonClick = (color: string) => {
    // Update the state when a filter button is clicked
    setSelectedFilter(color);

    // Log different messages based on the clicked button
    switch (color) {
      case 'red':
        console.log('Red Filter Button Clicked');
        break;
      case 'blue':
        console.log('Blue Filter Button Clicked');
        break;
      case 'orange':
        console.log('Orange Filter Button Clicked');
        break;
      default:
        console.log('Unknown Filter Button Clicked');
    }
  };

  return (
    <main>
      <div className="filter-buttons">
        <FilterButton color="red" number="1" onClick={() => handleFilterButtonClick('red')} />
        <FilterButton color="blue" number="2" onClick={() => handleFilterButtonClick('blue')} />
        <FilterButton color="orange" number="3" onClick={() => handleFilterButtonClick('orange')} />
      </div>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link href={`experiences/${post.sys.id}`}>
              <PostClosed
                title={post.fields.title}
                rating={post.fields.rating}
                location={post.fields.location}
                date={post.fields.date}
                open={false}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Posts;

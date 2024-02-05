"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import PostClosed from '@/app/components/PostClosed/PostClosed';
import FilterButton from '@/app/components/FilterButton/FilterButton';
import { Post } from '@/app/content';
import '../../composition.css';

interface ExperiencesProps {
  posts: Post[];
}

const Experiences: React.FC<ExperiencesProps> = ({ posts: initialPosts }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>(initialPosts); // Store posts in state

  const filterPostsByYear = (year: number) => {
    const filteredPosts = initialPosts.filter(post => new Date(post.fields.date).getFullYear() === year);
    setPosts(filteredPosts);
  };

  const handleFilterButtonClick = (color: string, number: string) => {
    // If the button is already active, reset the posts to initialPosts
    if (activeButton === color) {
      setPosts(initialPosts);
      setActiveButton(null);
      return;
    }

    // Update the state when a filter button is clicked
    setActiveButton(color);

    // Filter posts based on the year
    switch (number) {
      case '1':
        console.log('Red Filter Button Clicked - Posts from 2021');
        filterPostsByYear(2021);
        break;
      case '2':
        console.log('Blue Filter Button Clicked - Posts from 2022');
        filterPostsByYear(2022);
        break;
      case '3':
        console.log('Orange Filter Button Clicked - Posts from 2023');
        filterPostsByYear(2023);
        break;
      default:
        console.log('Unknown Filter Button Clicked');
        setPosts(initialPosts); // Reset to original posts
    }
  };

  return (
    <main>
      <div className="filter-buttons">
        <FilterButton color="red" number="1" onClick={() => handleFilterButtonClick('red', '1')} isActive={activeButton === 'red'} />
        <FilterButton color="blue" number="2" onClick={() => handleFilterButtonClick('blue', '2')} isActive={activeButton === 'blue'} />
        <FilterButton color="orange" number="3" onClick={() => handleFilterButtonClick('orange', '3')} isActive={activeButton === 'orange'} />
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

export default Experiences;

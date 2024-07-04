"use client";
import React, { useState } from "react";
import Link from "next/link";
import PostClosed from "@/app/components/PostClosed/PostClosed";
import FilterButton from "@/app/components/FilterButton/FilterButton";
import { Post } from "@/app/content";
import "../../composition.css";
import "../../fans/experiences/experiences.css";

interface ExperiencesProps {
  posts: Post[];
}

const Experiences: React.FC<ExperiencesProps> = ({ posts: initialPosts }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [allPosts, setAllPosts] = useState<Post[]>(initialPosts); // Store initial posts in state

  const filterPostsByYear = (year: number) => {
    const filteredPosts = allPosts.filter(
      (post) => new Date(post.fields.date).getFullYear() === year
    );
    setPosts(filteredPosts);
  };

  const handleFilterButtonClick = (color: string, number: string) => {
    if (activeButton === color) {
      setPosts(allPosts);
      setActiveButton(null);
      return;
    }

    setActiveButton(color);

    switch (number) {
      case "1":
        console.log("Red Filter Button Clicked - Posts from 2021");
        filterPostsByYear(2021);
        break;
      case "2":
        console.log("Blue Filter Button Clicked - Posts from 2022");
        filterPostsByYear(2022);
        break;
      case "3":
        console.log("Orange Filter Button Clicked - Posts from 2023");
        filterPostsByYear(2023);
        break;
      default:
        console.log("Unknown Filter Button Clicked");
        setPosts(allPosts);
    }
  };

  const handleDeletePost = (postId: string) => {
    const updatedPosts = posts.filter((post) => post.sys.id !== postId);
    const updatedAllPosts = allPosts.filter((post) => post.sys.id !== postId);
    setPosts(updatedPosts);
    setAllPosts(updatedAllPosts);
  };

  const handleDeleteClick = (e: React.MouseEvent, postId: string) => {
    e.stopPropagation();
    e.preventDefault();
    handleDeletePost(postId);
  };

  return (
    <div>
      <div className="filter-buttons">
        <FilterButton
          color="red"
          number="1"
          onClick={() => handleFilterButtonClick("red", "1")}
          isActive={activeButton === "red"}
        />
        <FilterButton
          color="blue"
          number="2"
          onClick={() => handleFilterButtonClick("blue", "2")}
          isActive={activeButton === "blue"}
        />
        <FilterButton
          color="orange"
          number="3"
          onClick={() => handleFilterButtonClick("orange", "3")}
          isActive={activeButton === "orange"}
        />
      </div>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.sys.id}>
            <div className="post-content">
              <Link href={`experiences/${post.sys.id}`} legacyBehavior>
                <a>
                  <PostClosed
                    title={post.fields.title}
                    rating={post.fields.rating}
                    location={post.fields.location}
                    date={post.fields.date}
                    open={false}
                  />
                </a>
              </Link>
              <button onClick={(e) => handleDeleteClick(e, post.sys.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;

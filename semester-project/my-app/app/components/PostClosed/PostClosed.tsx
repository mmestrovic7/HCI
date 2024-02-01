import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./PostClosed.css";

interface PostProps {
  title: string;
  location: string;
  date: string;
  rating: number;
  open: boolean;
}

const generateStars = (rating: number): React.ReactNode[] => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating;
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{ color: filled ? "var(--foreground-rgb)" : "gray" }}
      />
    );
  }
  return stars;
};

const PostClosed: React.FC<PostProps> = ({ title, location, date, rating, open }) => {
  const postClass = `postClosed ${open ? "postOpen" : ""}`;

  return (
    <div className={postClass}>
      <h1 className="title">{title}</h1>
      <div className="subFlex">
        <div>
          {location} <br />
          {date}
          <br />
        </div>
        <div className="rating"> {generateStars(rating)}</div>
      </div>
    </div>
  );
};

export default PostClosed;

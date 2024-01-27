import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./PostClosed.css";

interface PostProps {
  title: string;
  location: string;
  date: string;
  rating: number;
  open:boolean;
}

const PostClosed: React.FC<PostProps> = ({ title, location, date, rating, open }) => {
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
  const postClass = `postClosed ${open == false ? '': 'postOpen'}`;
  return (
    <div className={postClass}>
      <h1 className="title">{title}</h1>
      <div className="subFlex">
        <div>
          {location} <br />
          {date}
          <br />
        </div>
        <div className="rating"> {stars}</div>
      </div>
    </div>
  );
};

export default PostClosed;

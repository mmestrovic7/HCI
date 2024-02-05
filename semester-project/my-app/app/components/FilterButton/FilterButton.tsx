"use client";import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./FilterButton.css";

interface FilterButtonProps {
  color: string;
  number: string;
  onClick: () => void; // Add the onClick prop
  isActive: boolean; // Add the isActive prop
}

const FilterButton: React.FC<FilterButtonProps> = ({ color, number, onClick, isActive }) => {
  const handleClick = () => {
    if (isActive) {
      // If the button is already active, reset the posts to the initial state
      onClick();
    } else {
      // If the button is not active, call the onClick prop to toggle its state
      onClick();
    }
  };

  const buttonClassName = `filter-button ${color ? color : ""} ${isActive ? "inverted" : ""}`;
  
  return (
    <div className={buttonClassName} onClick={handleClick}>
      <button>
        <div className="line">
          <span>2</span>
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          <span>2</span>
          <span className="num">{number}</span>
        </div>
      </button>
    </div>
  );
};

export default FilterButton;

"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./FilterButton.css";

interface FilterButtonProps {
  color: string;
  number: string;
  onClick: () => void; // Add the onClick prop
}

const FilterButton: React.FC<FilterButtonProps> = ({ color, number, onClick }) => {
  const [isInverted, setIsInverted] = useState(false);

  const handleClick = () => {
    setIsInverted(!isInverted);
    onClick(); // Call the onClick prop when the button is clicked
  };

  const buttonClassName = `filter-button ${color ? color : ""} ${
    isInverted ? "inverted" : ""
  }`;
  
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

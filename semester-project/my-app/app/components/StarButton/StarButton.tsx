"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./StarButton.css";

interface StarButtonProps {
  color: string;
  number: string;
  onClick: () => void; // Add the onClick prop
  isActive: boolean; // Add the isActive prop
}

const StarButton: React.FC<StarButtonProps> = ({ color, number, onClick, isActive }) => {
  const handleClick = () => {
    if (isActive) {

      onClick();
    } else {

      onClick();
    }
  };

  const buttonClassName = `filter-button ${color ? color : ""} ${isActive ? "active" : ""}`;
  
  return (
   <FontAwesomeIcon icon={faStar} className="heart-icon" />
  );
};

export default StarButton;

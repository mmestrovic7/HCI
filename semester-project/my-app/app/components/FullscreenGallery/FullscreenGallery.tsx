"use client";
import React from "react";
import "./FullscreenGallery.css";
import { GalleryEntry } from "@/app/content";

interface FullscreenGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  galleryEntries: GalleryEntry[];
  currentEntry: {
    location: string;
    date: string;
    imageSrc: string;
  };
}

const FullscreenGallery: React.FC<FullscreenGalleryProps> = ({
  isOpen,
  onClose,
  galleryEntries,
  currentEntry,
}) => {
  return (
    <div className="overlayGallery">
      <div className="overlayItems">
        <button onClick={onClose} className="button-close">
          X
        </button>
        <div className="contentImg">
          <img src={currentEntry.imageSrc} alt={currentEntry.location} />
          <p>
            {currentEntry.location}, {currentEntry.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullscreenGallery;

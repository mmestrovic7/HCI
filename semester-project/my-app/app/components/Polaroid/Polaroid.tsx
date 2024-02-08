"use client";
import React, { useState } from "react";
import "./Polaroid.css";
import styles from "@/app/components/PhotoFrame/PhotoFrame.module.css";
import { GalleryEntry } from "@/app/content";
import FullscreenGallery from "@/app/components/FullscreenGallery/FullscreenGallery";

interface PolaroidProps {
  location: string;
  date: string;
  imageSrc: string;
  galleryEntries: GalleryEntry[];
}

const Polaroid: React.FC<PolaroidProps> = ({ location, date, imageSrc, galleryEntries }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleClick = () => {
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <>
      <div className="polaroid" onClick={handleClick}>
        <img src={imageSrc} height={293} width={293} alt="Polaroid" />
        <p className={styles.photoText}>
          {location}, <br />
          {date}
        </p>
      </div>
      {isGalleryOpen && (
        <FullscreenGallery
          isOpen={isGalleryOpen}
          onClose={handleCloseGallery}
          galleryEntries={galleryEntries}
          currentEntry={{ location, date, imageSrc }}
        />
      )}
    </>
  );
};

export default Polaroid;

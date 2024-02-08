
import React from 'react';
import Polaroid from '@/app/components/Polaroid/Polaroid';
import { GalleryEntry } from '@/app/content';
import "./GalleryComponent.css";
interface GalleryProps {
  galleryEntries: GalleryEntry[];
}

const GalleryComponent: React.FC<GalleryProps> = ({ galleryEntries }) => {
  return (
 
    <div className='gallery'>
      {galleryEntries.map((entry) => (
        <Polaroid
          location={entry.fields.location}
          date={entry.fields.date}
          imageSrc={entry.fields.photo.fields.file.url}
          key={entry.sys.id}
          galleryEntries={galleryEntries}
        />
      ))}
    </div>
  );
};

export default GalleryComponent;

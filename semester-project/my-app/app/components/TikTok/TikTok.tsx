// TikTok.tsx
import React from 'react';
import './TikTok.css';

interface TikTokProps {
  src: string;
}

const TikTok: React.FC<TikTokProps> = ({ src }) => {

  return (
    <video controls className='tikTok'>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default TikTok;

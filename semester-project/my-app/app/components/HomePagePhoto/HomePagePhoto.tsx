"use client";
import React from 'react';
import { useEffect,useState } from 'react';
import { getMobileOperatingSystem } from "@/app/os";

const HomePagePhoto: React.FC = () => {
  let src = '/harryHERO';
  const alt = 'image1';
  let width = 554;
  let height = 911.413;
  const [mobileOS, setMobileOS] = useState<string>("unknown");
  useEffect(() => {
    // Use setMobileOS to update the state
    setMobileOS(getMobileOperatingSystem());
  }, []); // Empty dependency array means useEffect runs once after initial render

  if (mobileOS === "iOS") {
    src += ".png";
    height=900;
    width=500;
  } else {
    src += ".svg";
  }
  return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
  );
};

export default HomePagePhoto;
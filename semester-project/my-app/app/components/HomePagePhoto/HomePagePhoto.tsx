"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getMobileOperatingSystem, checkIfIOS } from "@/app/os";

const HomePagePhoto: React.FC = () => {
  let src = "/harryHERO";
  const alt = "image1";
  const width = 554;
  const height = 911.413;
  const [mobileOS, setMobileOS] = useState<string>("unknown");
  useEffect(() => {
    // Use setMobileOS to update the state
    setMobileOS(getMobileOperatingSystem());
  }, []); // Empty dependency array means useEffect runs once after initial render

  src = checkIfIOS(mobileOS, src);
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default HomePagePhoto;

'use client'
import React, { FC,useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getMobileOperatingSystem, checkIfIOS } from "@/app/os";
import "../Navbar/Navbar.css"



const Logo = () => {
 
  const [mobileOS, setMobileOS] = useState<string>("unknown");
  let logo = "/hslogo2";

  useEffect(() => {
    setMobileOS(getMobileOperatingSystem());
  }, []);

  logo = checkIfIOS(mobileOS, logo);

  return (
    
      <Link href="/" >
        <Image
          className="nav-logo"
          src={logo}
          width={200}
          height={31}
          alt="Navbar logo"
        />
      </Link>

  );
};

export default Logo;

'use client'
import React, { FC,useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getMobileOperatingSystem, checkIfIOS } from "@/app/os";
import "../Navbar/Navbar.css"

interface LogoProps {
  handleItemClick: (name: string) => void;
}

const Logo: FC<LogoProps> = ({ handleItemClick }) => {
 
  const [mobileOS, setMobileOS] = useState<string>("unknown");
  let logo = "/hslogo2";

  useEffect(() => {
    setMobileOS(getMobileOperatingSystem());
  }, []);

  logo = checkIfIOS(mobileOS, logo);

  return (
    <div className="navbar-logo-container">
      <Link href="/" onClick={() => handleItemClick("home")} className="link">
        <Image
          className="nav-logo"
          src={logo}
          width={200}
          height={31}
          alt="Navbar logo"
        />
      </Link>
    </div>
  );
};

export default Logo;

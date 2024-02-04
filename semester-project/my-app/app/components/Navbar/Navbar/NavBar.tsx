"use client";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css"; // Import your CSS module
import Hamburger from "../../Hamburger/Hamburger";
import { getMobileOperatingSystem } from "@/app/os";

interface NavbarProps {
  pages: { [key: string]: string };
}

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathname = usePathname();
  const sanitizedPathname = pathname.substring(1);
  const firstSlashIndex = sanitizedPathname.indexOf("/");
  let mobileOS = "unknown";
  useEffect(() => {
     mobileOS = getMobileOperatingSystem();
    console.log(`Mobile Operating System: ${mobileOS}`);
  }, []);
  let logo="/hslogo";
  if(mobileOS==="iOS"){
    logo+=".png";
  }
  else{
    logo+=".svg";
  }


  // If a slash is found, extract the substring up to that index; otherwise, keep the entire string.
  const path =
    firstSlashIndex !== -1
      ? sanitizedPathname.substring(0, firstSlashIndex)
      : sanitizedPathname;

  const [selectedNavItem, setSelectedNavItem] = useState<string | "/">(
    path === "" ? "home" : path
  );
  console.log("Initial pathname:", pathname);

  const handleItemClick = (name: string) => {
    setSelectedNavItem(name);
  };

  return (
    <nav className="navbar">

      <Link href="/" onClick={() => handleItemClick("home")}>
        <Image
          className="nav-logo"
          src={logo}
          width={373}
          height={51}
          alt="Navbar logo"
        />
      </Link>

      <div className="showOnPhone">
        <Hamburger pages={pages} />
      </div>

      <ul className="navbar-elements hideOnPhone">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name} className={selectedNavItem === name ? "active" : ""}>
            <Link href={path} onClick={() => handleItemClick(name)}>
              {name.toUpperCase()}
            </Link>
          </li>
        ))}
        <li
          key="about-hs"
          className={selectedNavItem === "about-hs" ? "active" : ""}
        >
          <Link href="/about-hs" onClick={() => handleItemClick("about-hs")}>
            ABOUT HS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

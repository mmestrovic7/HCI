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
  // State for mobileOS
  const [mobileOS, setMobileOS] = useState<string>("unknown");
  useEffect(() => {
    // Use setMobileOS to update the state
    setMobileOS(getMobileOperatingSystem());
  }, []); // Empty dependency array means useEffect runs once after initial render

  let logo = "/hslogo2";
  let height = 51;
  let width= 373;
  if (mobileOS === "iOS") {
    logo += ".png";
    height = 10;
    width = 170;
  } else {
    logo += ".svg";
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
          width={width}
          height={height}
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

"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import  "./Navbar.css"; // Import your CSS module

interface NavbarProps {
  pages: { [key: string]: string };
}

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const [selectedNavItem, setSelectedNavItem] = useState<string|"/">("home");
  const pathname = usePathname();

  const handleItemClick = (name: string) => {
    setSelectedNavItem(name);
  };

  return (
    <nav className="navbar">
      <Image
        className="nav-logo"
        src="/hslogo.svg"
        width={93}
        height={65}
        alt="Navbar logo"
      />
      <ul className="navbar-elements">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name} className={selectedNavItem === name ? "active" : ""}>
            <Link href={path} onClick={() => handleItemClick(name)}>
              {name.toUpperCase()}
            </Link>
          </li>
        ))}
        <li className={selectedNavItem === "about-hs" ? "active" : ""}>
          <Link href="/about-hs" onClick={() => handleItemClick("about-hs")}>
            ABOUT HS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

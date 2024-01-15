"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css"; // Import your CSS module
import Hamburger from "../../Hamburger/Hamburger";

interface NavbarProps {
  pages: { [key: string]: string };
}

// ... (existing imports)

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const [selectedNavItem, setSelectedNavItem] = useState<string | "/">("home");
  const pathname = usePathname();

  const handleItemClick = (name: string) => {
    setSelectedNavItem(name);
  };

  return (
    <nav className="navbar">
      <Link href="/" onClick={() => handleItemClick("home")}>
        <Image
          className="nav-logo"
          src="/hslogo2 1.svg"
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

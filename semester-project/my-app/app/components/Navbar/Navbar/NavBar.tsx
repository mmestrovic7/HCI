"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css"; // Import your CSS module
import Hamburger from "../../Hamburger/Hamburger";
import { Console } from "console";

interface NavbarProps {
  pages: { [key: string]: string };
}

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathname = usePathname();
  const sanitizedPathname = pathname.substring(1);
  const firstSlashIndex = sanitizedPathname.indexOf("/");

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
      <ul>
      <li>
      <Link href="/" onClick={() => handleItemClick("home")}>
        <Image
          className="nav-logo"
          src="/hslogo2 1.svg"
          width={373}
          height={51}
          alt="Navbar logo"
        />
      </Link>
      </li>
      </ul>
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

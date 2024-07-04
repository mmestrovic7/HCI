"use client";

import React, { FC, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import Hamburger from "../../Hamburger/Hamburger";


interface NavbarProps {
  pages: { [key: string]: string };
}

const extractPath = (pathname: string): string => {
  const sanitizedPathname = pathname.substring(1);
  const firstSlashIndex = sanitizedPathname.indexOf("/");
  return firstSlashIndex !== -1
    ? sanitizedPathname.substring(0, firstSlashIndex)
    : sanitizedPathname;
};

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathname = usePathname();
  const [selectedNavItem, setSelectedNavItem] = useState<string | "/">("");

  useEffect(() => {
    const extractedPath = extractPath(pathname);
    setSelectedNavItem(extractedPath === "" ? "home" : extractedPath);
  }, [pathname]);

  const handleItemClick = useCallback((name: string) => {
    setSelectedNavItem(name);
  }, []);

  return (
    <div>
      <div className="showOnPhone">
        <Hamburger
          pages={pages}
          activeItem={selectedNavItem}
          handleItemClick={handleItemClick}
        />
      </div>

      <ul className="navbar-elements hideOnPhone">
        {Object.entries(pages).map(([name, path]) => (
           <Link href={path} onClick={() => handleItemClick(name)}>
          <li key={name} className={selectedNavItem === name ? "active" : ""}>
           
              {name.toUpperCase()}
          
          </li>
          </Link>
        ))}
        <Link href="/about-hs" onClick={() => handleItemClick("about-hs")}>
        <li
          key="about-hs"
          className={selectedNavItem === "about-hs" ? "active" : ""}
        >
          
            ABOUT HS
         
        </li> </Link>
      </ul>
    </div>
  );
};

export default Navbar;

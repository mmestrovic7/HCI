"use client";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import Hamburger from "../../Hamburger/Hamburger";
import { getMobileOperatingSystem, checkIfIOS } from "@/app/os";

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
  const [mobileOS, setMobileOS] = useState<string>("unknown");
  const [selectedNavItem, setSelectedNavItem] = useState<string | "/">("");
  let logo = "/hslogo2";

  useEffect(() => {
    const extractedPath = extractPath(pathname);
    setSelectedNavItem(extractedPath === "" ? "home" : extractedPath);
  }, [pathname]);

  useEffect(() => {
    setMobileOS(getMobileOperatingSystem());
  }, []);

  logo = checkIfIOS(mobileOS, logo);
  console.log(logo);

  const handleItemClick = (name: string) => {
    setSelectedNavItem(name);
  };

  return (
    <nav className="navbar">
      <Link href="/" onClick={() => handleItemClick("home")} className="link">
        <Image
          className="nav-logo"
          src={logo}
          width={200}
          height={31}
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

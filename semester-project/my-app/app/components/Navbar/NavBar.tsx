"use client"
import React from 'react';
import './Navbar.css';
import Link from 'next/link';
import { FC, useState } from "react";
import Image from "next/image";
const pages = {
    home: "/",
    bts: "/bts",
    fans: "/fans",
    lot: "/lot",
    style:"/style"
  };
class Navbar extends React.Component{

    render(){
        return(
            <nav className='navbar'>
            <Image
                className="nav-logo"
                src="/hslogo.svg"
                width={93}
                height={65}
                alt="Navbar logo"
              />
              <ul className="navbar-elements">
              {Object.entries(pages).map(([name, path]) => (
                    <li key={name}>
                      <Link href={path}>{name.toUpperCase()}</Link>
                    </li>
                  ))}
                <li>
                  <Link href="/about-hs">ABOUT HS</Link>
                  </li>
              
              </ul>
            </nav>
        );
    }
}
export default Navbar;
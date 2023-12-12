import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { FC, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar/NavBar";


const pages = {
  home: "/",
  bts: "/bts",
  fans: "/fans",
  lot: "/lot",
  style:"/style"
};

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LOVE ON TOUR',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>  
      <Navbar pages={pages}/>
        {children}</body>
    </html>
  )
}

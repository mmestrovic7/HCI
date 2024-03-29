import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar/NavBar";
import Logo from "./components/Navbar/Logo/Logo";
import Footer from "./components/Footer/Footer";
import "./components/Navbar/Navbar/Navbar.css";
const pages = {
  home: "/",
  fans: "/fans",
  lot: "/lot",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOVE ON TOUR",
  description: "Harry Styles Love On Tour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          <Logo />
          <Navbar pages={pages} />
    </nav>
        {children}
        <div className="tilting-image"></div>
        <div className="tilting-image2"></div>
        <Footer />
      </body>
    </html>
  );
}

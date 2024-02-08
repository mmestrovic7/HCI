import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
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
          <Navbar pages={pages} />
        {children}
        <div className="tilting-image"></div>
        <div className="tilting-image2"></div>
        <Footer />
      </body>
    </html>
  );
}

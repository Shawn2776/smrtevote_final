import { GoogleAnalytics } from "@next/third-parties/google";

import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
      <GoogleAnalytics gaId="G-1Q7ZFN5YPM" />
    </html>
  );
}
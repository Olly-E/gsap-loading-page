import localFont from "next/font/local";
import React from "react";
import "./globals.css";

const ppNeue = localFont({ src: "../../public/fonts/ppneue.woff2" });


type RootLayoutProps = {
  children: React.ReactNode;
}
const RootLayout = ({ children }:RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={ppNeue.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
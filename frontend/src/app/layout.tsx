import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "SmartBin",
  description: "Sorts garbage for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

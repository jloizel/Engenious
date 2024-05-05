import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engenious Recruitment",
  description: "Connecting construction and civil engineering professionals across the South East",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8"/>
      <body className="body">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

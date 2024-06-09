import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../../components/footer/footer";
import { JobProvider } from "../../components/jobContext/jobContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Engenious Recruitment",
//   description: "Connecting construction and civil engineering professionals across the South East",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charSet="UTF-8"/>
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

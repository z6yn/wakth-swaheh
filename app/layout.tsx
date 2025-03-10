import "../styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientComponents from "./components/ClientComponents";
import type { ReactNode } from "react";
//import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Wakth Swaheh Watches",
  description:
    "Discover exquisite timepieces at Wakth Swaheh, your destination for watches.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white flex flex-col min-h-screen`}
      > 
      {/* <CustomCursor /> */}
        <ClientComponents />
        
        <Header />
        <div className="flex-grow pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

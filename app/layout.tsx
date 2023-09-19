import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Khalil Meals",
  description: "Nutritional tips, meal preps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F7F7]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

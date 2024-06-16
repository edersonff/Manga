import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full bg-gray-700">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dijital Katalog",
  description: "Dijital katalog ve teklif yönetim sistemi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
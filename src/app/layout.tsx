import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";

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
      </body>
    </html>
  );
}
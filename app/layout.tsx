import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For you Raji ❤️",
  description: "A special birthday surprise ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
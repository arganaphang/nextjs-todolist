import type { Metadata } from "next";
import Navbar from "./_components/navbar";
import QueryProvider from "./_components/query-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

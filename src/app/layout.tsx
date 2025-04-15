import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Loading from "@/components/UI/loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pp = localFont({
  src: "../../fonts/pp/PPEditorialOld-Regular.otf",
  variable: "--font-pp",
});

const ppi = localFont({
  src: "../../fonts/pp/PPEditorialOld-Italic.otf",
  variable: "--font-ppi",
});

export const metadata: Metadata = {
  title: "Green Studios",
  description:
    "Green Studios is a green energy based agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${pp.variable} ${ppi.variable} antialiased`}
      >
        <Loading />
        {children}
      </body>
    </html>
  );
}

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
  title: "After Burner Studios",
  description:
    "After Burner Studios is a service based agency that specializes in software development and product design.",
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhruvin Jariwala | ASP.NET Core & React Developer Portfolio",
  description: "3D Developer Portfolio of Dhruvin Jariwala",
  verification: {
    google: "H9JPp1Gj4LXelxPJjZUsBUzx03lFBhC5QNaQZNotxSY",
  },
  keywords: [
    "Dhruvin Jariwala",
    "ASP.NET Core Developer",
    "Reactjs Developer",
    "Full Stack Developer India"
  ],
  authors: [{ name: "Dhruvin Jariwala" }],
  metadataBase: new URL("https://dhruvinjariwala.vercel.app"),

   openGraph: {
    title: "Dhruvin Jariwala Developer Portfolio",
    description:
      "Portfolio of Dhruvin Jariwala - ASP.NET Core MVC and React Developer.",
    url: "https://dhruvinjariwala.vercel.app",
    siteName: "Dhruvin Portfolio",
    locale: "en_US",
    type: "website",
    images: [
    {
      url: "/images/icon.png",
      width: 1200,
      height: 630,
      alt: "Dhruvin Jariwala Portfolio",
    },
  ],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}


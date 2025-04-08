import type { Metadata } from "next"
import { Quicksand } from 'next/font/google';
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { Banner } from "@/components/Banner"
import "./globals.css"
import { Toaster } from "sonner";
import { Providers } from "./providers";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shop-Eco",
  description: "Ecological e-commerce",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${quicksand.className} antialiased`}
      >
        <Providers>
          <Toaster richColors position="top-center" />
          <NavBar />
          <Banner />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

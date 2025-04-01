import type { Metadata } from "next"
import localFont from 'next/font/local';
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { Banner } from "@/components/Banner"
import "./globals.css"

const quicksand = localFont({
  src: [
    {
      path: '../../public/fonts/Quicksand-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-quicksand',
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
    <html lang="es">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${quicksand.variable} antialiased`}
      >
        <NavBar />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  )
}

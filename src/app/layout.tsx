import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header"
import Footer from "../components/footer"
import MainLayout from "../components/main"
import { ChakraProvider } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: "Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
      <ChakraProvider>
      <Header/>
        <MainLayout>{children}</MainLayout>
      <Footer/>
      </ChakraProvider>

      </body>
    </html>
  );
}
"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"
import { Container } from "@chakra-ui/react";

const Index: React.FC = () => {

  const pathname = usePathname();
  return (
    <header className='bg-white text-black'>

      <Container maxW={1920}>
        <nav className='flex justify-center p-16'>

          <ul className='flex gap-x-16 '>
            <li>
              <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/" >Home</Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/menu" ? "active" : ""}`} href="/menu" >Menu</Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/about" >About</Link>
            </li>
            <li>
              <Link className={`link ${pathname === "/shop" ? "active" : ""}`} href="/shop" >Shop</Link>
            </li>
          </ul>
        </nav>



      </Container>

    </header>
  );
};

export default Index;
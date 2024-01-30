"use client"

import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";
import { 
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   NavbarMenuToggle,
   NavbarMenu,
   NavbarMenuItem}
   from "@nextui-org/react";
import Navigation from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <NextUIProvider>
      <Navigation/>
      
      
    </NextUIProvider>

    </>
  );
}

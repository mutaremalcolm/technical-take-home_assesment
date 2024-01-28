"use client"

import Card from "@/components/Card";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { JSX, useState } from "react";


interface CardData {
  id: string;
  title: string;
  description: string;
  ideaText: string;
}


export default function Home() {
  return (
    <>
    <Navigation />
    <Card />
    </>
  );
}



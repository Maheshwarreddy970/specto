"use client";
import React from "react";
import { HeroParallax } from "@/components/global/connect-parallax";

export function HeroScrollDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "team",
    thumbnail:
      "/screen3.png",
  },
  {
    title: "media",
    thumbnail:
      "/screen7.png",
  },
  {
    title: "dashboard",
    thumbnail:
      "/temp-banner.png ",
  },

  {
    title: "team",
    thumbnail:
      "/screen1.png",
  },
  {
    title: "media ",
    thumbnail:
      "/screen6.png",
  },
  {
    title: "pipeline",
    thumbnail:
      "/screen4.png",
  },

  {
    title: "dashboard",
    thumbnail:
      "/screen2.png",
  },
  {
    title: "billng",
    thumbnail:
      "/screen9.png",
  },
  {
    title: "pipeline",
    thumbnail:
      "/screen5.png",
  },
  {
    title: "form",
    thumbnail:
      "/screen8.png",
  },
  
];

"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Aceternity.",
      className: "text-blue-500 text-xl dark:text-blue-500",
    },
  ];
  return (
      <TypewriterEffectSmooth words={words} />
      
  );
}

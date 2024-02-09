"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const foodImages = [
  "/assets/imgs/food-01.png",
  "/assets/imgs/food-02.png",
  "/assets/imgs/food-03.png",
  "/assets/imgs/food-04.png",
];

const ANIMATION_TIME = 0.5;
const INTERVAL_TIME = 2000;

export default function HeroImages({ className, ...props }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % foodImages.length);
    }, INTERVAL_TIME);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cn("relative w-[300px]", className)} {...props}>
      <AnimatePresence>
        <motion.img
          initial={{ scale: 0.1, translateY: 50 }}
          animate={{ scale: 1, translateY: 0 }}
          transition={{
            duration: ANIMATION_TIME,
          }}
          exit={{ scale: 0.1 }}
          src={foodImages[currentImage]}
          key={currentImage}
          className="absolute"
        ></motion.img>
      </AnimatePresence>
    </div>
  );
}

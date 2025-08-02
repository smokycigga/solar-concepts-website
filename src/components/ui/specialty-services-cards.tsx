"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const SpecialtyServicesCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    bgImage: string;
    index: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (scrollerRef.current) {
      if (direction === "left") {
        scrollerRef.current.classList.remove("animate-scroll-reverse");
        scrollerRef.current.classList.add("animate-scroll");
      } else {
        scrollerRef.current.classList.remove("animate-scroll");
        scrollerRef.current.classList.add("animate-scroll-reverse");
      }
    }
  };
  
  const getSpeed = () => {
    if (scrollerRef.current) {
      if (speed === "fast") {
        scrollerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        scrollerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        scrollerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-0",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.title}-${idx}`}
            className="relative w-[300px] sm:w-[400px] lg:w-[494px] h-[225px] sm:h-[337px] lg:h-[450px] flex-shrink-0 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden"
            style={{
              backgroundImage: `url(${item.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </li>
        ))}
      </ul>
    </div>
  );
};
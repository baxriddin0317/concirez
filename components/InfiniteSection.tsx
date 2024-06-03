"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

interface props {
  items: {
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteSection = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

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
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
    ref={containerRef}
      className={cn("scroller relative z-20  overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex items-center min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex text-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
            <g clipPath="url(#clip0_2001_1018)">
              <path d="M14.8896 29.0199C22.8375 29.0199 29.2801 22.5772 29.2801 14.6293C29.2801 6.68142 22.8375 0.23877 14.8896 0.23877C6.94168 0.23877 0.499023 6.68142 0.499023 14.6293C0.499023 22.5772 6.94168 29.0199 14.8896 29.0199Z" fill="white" />
              <path d="M8.37695 15.5599L12.0984 19.2813L21.4019 9.97776" stroke="#121212" strokeWidth="2.21393" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_2001_1018">
                <rect width="28.7811" height="28.7811" fill="white" transform="translate(0.499023 0.23877)" />
              </clipPath>
            </defs>
           </svg>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

"use client";

import { useEffect, useState, useRef } from "react";
import { FloatingMouse } from "./ui/floatingMouse";

const FloatingMouseWrapper = () => {
  const [isMouseHidden, setIsMouseHidden] = useState(false);
  const endOfPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMouseHidden(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (endOfPageRef.current) {
      observer.observe(endOfPageRef.current);
    }

    return () => {
      if (endOfPageRef.current) {
        observer.unobserve(endOfPageRef.current);
      }
    };
  }, []);

  return (
    <>
      <FloatingMouse hidden={isMouseHidden} />
      <div ref={endOfPageRef} className="h-4"></div>
    </>
  );
};

export default FloatingMouseWrapper;

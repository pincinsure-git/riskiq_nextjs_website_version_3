import { useState, useEffect } from "react";

export default function useWindowSize() {
  const getSize = () => {
    return {
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize(getSize());
      };

      window.addEventListener("resize", handleResize);
      handleResize(); // Set initial size on mount

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}

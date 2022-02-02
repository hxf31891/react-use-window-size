import { useState, useLayoutEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();

    return () => window.removeEventListener("resize", updateWindowSize);
  });

  const updateWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  return windowHeight;
};

export { useWindowSize };

import { useEffect, useState } from "react";

type MousePosition = "left" | "right";

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>("left");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const mouseX = event.clientX;
      const position: MousePosition =
        mouseX < screenWidth / 2 ? "left" : "right";
      setMousePosition(position);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;

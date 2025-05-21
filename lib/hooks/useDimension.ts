import { useEffect, useState } from "react";

type Dimensions = {
  width: number;
  height: number;
};

export const useDimensions = (
  ref: React.RefObject<HTMLElement>
): Dimensions | null => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  useEffect(() => {
    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (ref.current) {
        const { width, height } = entries[0].contentRect;
        setDimensions({ width, height });
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    const currentElement = ref.current;

    if (currentElement) {
      resizeObserver.observe(currentElement);

      const initialWidth = currentElement.offsetWidth;
      const initialHeight = currentElement.offsetHeight;
      setDimensions({ width: initialWidth, height: initialHeight });
    }

    return () => {
      if (currentElement) {
        resizeObserver.unobserve(currentElement);
      }

      resizeObserver.disconnect();
    };
  }, [ref]);

  return dimensions;
};

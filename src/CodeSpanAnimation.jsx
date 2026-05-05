import "./App.css";
import { useEffect, useRef } from "react";

const text = "<Code/>";

export default function CodeSpan() {
  const displayedRef = useRef("");
  const intervalRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const spanRef = useRef(null);

  const clearAll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const setDisplayed = (str) => {
    displayedRef.current = str;
    if (spanRef.current) spanRef.current.textContent = str;
  };

  const typeForward = () => {
    clearAll();
    let i = displayedRef.current.length;
    intervalRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearAll();
        isAnimatingRef.current = false;
      }
    }, 150);
  };

  const deleteBack = () => {
    clearAll();
    intervalRef.current = setInterval(() => {
      if (displayedRef.current.length > 0) {
        setDisplayed(displayedRef.current.slice(0, -1));
      } else {
        clearAll();
        typeForward();
      }
    }, 150);
  };

  useEffect(() => {
    typeForward();
    return clearAll;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    deleteBack();
  };

  return (
    <span className="code-span-wrapper" onMouseEnter={handleMouseEnter}>
      <span className="code-span" ref={spanRef}></span>
    </span>
  );
}
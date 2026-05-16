import "./TypingAnimation.css";
import { useEffect, useRef, useCallback } from "react";

export default function TypingAnimation({ text = "" }) {
  const displayedRef = useRef("");
  const intervalRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const spanRef = useRef(null);
  const cursorRef = useRef(null);

  const clearAll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const setDisplayed = useCallback((str) => {
    displayedRef.current = str;
    if (spanRef.current) spanRef.current.textContent = str;
  }, []);

  const setTypingCursor = useCallback((active) => {
    if (!cursorRef.current) return;
    cursorRef.current.classList.toggle("blinking", !active);
  }, []);

  const typeForward = useCallback(() => {
    clearAll();
    setTypingCursor(true);
    let i = displayedRef.current.length;
    intervalRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearAll();
        isAnimatingRef.current = false;
        setTypingCursor(false);
      }
    }, 100);
  }, [text, clearAll, setDisplayed, setTypingCursor]);

  const deleteBack = useCallback(() => {
    clearAll();
    setTypingCursor(true);
    intervalRef.current = setInterval(() => {
      if (displayedRef.current.length > 0) {
        setDisplayed(displayedRef.current.slice(0, -1));
      } else {
        clearAll();
        typeForward();
      }
    }, 80);
  }, [clearAll, setDisplayed, setTypingCursor, typeForward]);

  useEffect(() => {
    isAnimatingRef.current = true;
    typeForward();
    return clearAll;
  }, [typeForward, clearAll]);

  const handleMouseEnter = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    deleteBack();
  }, [deleteBack]);

  return (
    <span className="code-span-wrapper" onMouseEnter={handleMouseEnter} aria-label={text}>
      <span className="code-span-text" ref={spanRef} />
      <span className="code-cursor blinking" ref={cursorRef} />
    </span>
  );
}
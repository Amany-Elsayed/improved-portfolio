import { useEffect, useRef, useState } from "react";
import "./RevealWrapper.css";

export default function RevealWrapper({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setIsVisible(true), delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={["reveal", isVisible && "reveal-visible", className]
        .filter(Boolean)
        .join(" ")}
    >
      {typeof children === "function" ? children(isVisible) : children}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import "./RevealWrapper.css";

export default function RevealWrapper({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId;
    let observerTimeout;
    const isMobile = window.innerWidth <= 768;

    const startObserving = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => setIsVisible(true), delay * 1000);
            observer.unobserve(el);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -5% 0px",
        },
      );

      observer.observe(el);
      return observer;
    };

    let observer;

    if (isMobile) {
      const rect = el.getBoundingClientRect();
      const isNearTop = rect.top < window.innerHeight * 1.5;
      observerTimeout = setTimeout(
        () => {
          observer = startObserving();
        },
        isNearTop ? 500 : 0,
      );
    } else {
      observer = startObserving();
    }

    return () => {
      observer?.disconnect();
      clearTimeout(timeoutId);
      clearTimeout(observerTimeout);
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

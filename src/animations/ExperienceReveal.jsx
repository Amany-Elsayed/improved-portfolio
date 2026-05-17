import { useEffect, useRef, useState } from "react";
import "./ExperienceReveal.css";

const BEAM_END = 0.95;

export default function ExperienceReveal({ children }) {
  const contentRef = useRef(null);
  const beamRef = useRef(null);
  const rowRefs = useRef([]);
  const dotRefs = useRef([]);
  const [visibleRows, setVisibleRows] = useState(new Set());

  const setRowRef = (i) => (el) => {
    rowRefs.current[i] = el;
  };

  const setDotRef = (i) => (el) => {
    dotRefs.current[i] = el;
  };

  useEffect(() => {
    const container = contentRef.current;
    const beam = beamRef.current;
    if (!container || !beam) return;

    let maxProgress = 0;
    let done = false;

    const updateBeam = () => {
      if (done) return;

      const { top, height } = container.getBoundingClientRect();
      const vh = window.innerHeight;

      const rawProgress = (vh - top - vh * 0.3) / height;
      const progress = Math.min(BEAM_END, Math.max(0, rawProgress));

      if (progress > maxProgress) {
        maxProgress = progress;
        beam.style.transform = `scaleY(${maxProgress})`;
      }

      const beamTipViewportY = top + maxProgress * height;

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;

        const dotRect = dot.getBoundingClientRect();
        const dotCentreY = dotRect.top + dotRect.height / 2;

        if (beamTipViewportY >= dotCentreY) {
          setVisibleRows((prev) => {
            if (prev.has(i)) return prev;
            return new Set([...prev, i]);
          });
        }
      });

      if (maxProgress >= BEAM_END) {
        done = true;
        window.removeEventListener("scroll", updateBeam);
        window.removeEventListener("resize", updateBeam);
      }
    };

    window.addEventListener("scroll", updateBeam, { passive: true });
    window.addEventListener("resize", updateBeam, { passive: true });
    updateBeam();

    return () => {
      window.removeEventListener("scroll", updateBeam);
      window.removeEventListener("resize", updateBeam);
    };
  }, []);

  return (
    <div ref={contentRef} className="experience-timeline-reveal">
      {children({
        beamRef,
        rowVisible: visibleRows,
        setRowRef,
        setDotRef,
      })}
    </div>
  );
}
import { useEffect, useRef, useState } from "react";
import "./ExperienceReveal.css";

const BEAM_TRIGGER_Y = 300;
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

    const updateBeam = () => {
      const { top, height } = container.getBoundingClientRect();

      const rawProgress = (BEAM_TRIGGER_Y - top) / height;
      const progress = Math.min(BEAM_END, Math.max(0, rawProgress));

      if (progress > maxProgress) {
        maxProgress = progress;
        beam.style.transform = `scaleY(${maxProgress})`;
      }

      const beamTipViewportY = top + maxProgress * height;

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const dotViewportY =
          dot.getBoundingClientRect().top + dot.offsetHeight * 0.5;
        if (beamTipViewportY >= dotViewportY) {
          setVisibleRows((prev) => new Set([...prev, i]));
        }
      });

      if (maxProgress >= BEAM_END) {
        window.removeEventListener("scroll", updateBeam);
      }
    };

    window.addEventListener("scroll", updateBeam, { passive: true });
    updateBeam();

    return () => window.removeEventListener("scroll", updateBeam);
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

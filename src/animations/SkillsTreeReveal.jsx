import { useEffect, useRef, useState } from "react";
import "./SkillsTreeReveal.css";

const BEAM_TRIGGER_Y = 300;
const BEAM_END = 0.98;

export default function SkillsTreeReveal({ children }) {
  const containerRef = useRef(null);
  const trunkRef = useRef(null);
  const [lit, setLit] = useState(new Set());

  useEffect(() => {
    const container = containerRef.current;
    const trunk = trunkRef.current;
    if (!container || !trunk) return;

    let maxProgress = 0;
    const branchTops = [145, 145, 470, 470];

    const update = () => {
      const { top, height } = container.getBoundingClientRect();
      const raw = (BEAM_TRIGGER_Y - top) / height;
      const progress = Math.min(BEAM_END, Math.max(0, raw));

      if (progress > maxProgress) {
        maxProgress = progress;
        trunk.style.transform = `translateX(-50%) scaleY(${maxProgress})`;
      }

      const beamTipY = top + maxProgress * height;

      branchTops.forEach((branchOffsetFromTop, i) => {
        const branchAbsoluteY = top + branchOffsetFromTop + 2.5;
        if (beamTipY >= branchAbsoluteY) {
          setLit((prev) => {
            if (prev.has(i)) return prev;
            return new Set([...prev, i]);
          });
        }
      });

      if (maxProgress >= BEAM_END) {
        window.removeEventListener("scroll", update);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div ref={containerRef} className="skills-tree-reveal">
      {children({ trunkRef, lit })}
    </div>
  );
}
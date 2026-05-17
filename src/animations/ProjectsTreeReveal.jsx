import { useEffect, useRef } from "react";
import "./ProjectsTreeReveal.css";

const isMobile = window.innerWidth <= 768;
const TRIGGER_Y = isMobile ? 700 : 300;
const MAX_PROGRESS = 0.95;

export default function ProjectsTreeReveal() {
  const containerRef = useRef(null);

  const beamRef = useRef(null);

  const branch1Ref = useRef(null);
  const branch2Ref = useRef(null);
  const branch3Ref = useRef(null);
  const branch4Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let maxProgress = 0;

    const updateBeam = () => {
      const rect = container.getBoundingClientRect();

      const rawProgress = (TRIGGER_Y - rect.top) / rect.height;

      const progress = Math.min(MAX_PROGRESS, Math.max(0, rawProgress));

      if (progress > maxProgress) {
        maxProgress = progress;

        if (beamRef.current) {
          beamRef.current.style.transform = `translateX(-50%) scaleY(${maxProgress})`;
        }

        if (maxProgress > 0.22) {
          if (!isMobile) {
            branch1Ref.current?.classList.add("projects-branch-visible");
            branch2Ref.current?.classList.add("projects-branch-visible");
          }
        }

        if (maxProgress > 0.72) {
          if (!isMobile) {
            branch3Ref.current?.classList.add("projects-branch-visible");
            branch4Ref.current?.classList.add("projects-branch-visible");
          }
        }
      }
    };

    window.addEventListener("scroll", updateBeam, {
      passive: true,
    });

    updateBeam();

    return () => window.removeEventListener("scroll", updateBeam);
  }, []);

  return (
    <div ref={containerRef} className="projects-tree-overlay">
      {/* ANIMATED CENTER BEAM */}
      <div ref={beamRef} className="projects-tree-animated-beam" />

      {/* TOP LEFT */}
      <div ref={branch1Ref} className="projects-animated-branch left top" />

      {/* TOP RIGHT */}
      <div ref={branch2Ref} className="projects-animated-branch right top" />

      {/* BOTTOM LEFT */}
      <div ref={branch3Ref} className="projects-animated-branch left bottom" />

      {/* BOTTOM RIGHT */}
      <div ref={branch4Ref} className="projects-animated-branch right bottom" />
    </div>
  );
}

"use client";
import { useEffect, useRef, useCallback } from "react";

const parseColor = (hex) => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
});

const InteractiveDots = ({
  backgroundColor = "#F0EEE6",
  dotColor = "#666666",
  gridSpacing = 30,
  animationSpeed = 0.005,
}) => {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  const animationFrameId = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, isDown: false });
  const ripples = useRef([]);
  const dotsRef = useRef([]);
  const dprRef = useRef(1);
  const colorRef = useRef(parseColor(dotColor));
  const backgroundColorRef = useRef(backgroundColor);
  const animationSpeedRef = useRef(animationSpeed);

  useEffect(() => {
    colorRef.current = parseColor(dotColor);
  }, [dotColor]);

  useEffect(() => {
    backgroundColorRef.current = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    animationSpeedRef.current = animationSpeed;
  }, [animationSpeed]);

  const initializeDots = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    const dots = [];
    for (let x = gridSpacing / 2; x < canvasWidth; x += gridSpacing) {
      for (let y = gridSpacing / 2; y < canvasHeight; y += gridSpacing) {
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    dotsRef.current = dots;
  }, [gridSpacing]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;
    const displayWidth = canvas.parentElement
      ? canvas.parentElement.clientWidth
      : window.innerWidth;
    const displayHeight = canvas.parentElement
      ? canvas.parentElement.clientHeight
      : window.innerHeight;
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    canvas.style.width = displayWidth + "px";
    canvas.style.height = displayHeight + "px";
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    initializeDots();
  }, [initializeDots]);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, []);

  const handleMouseDown = useCallback((e) => {
    mouseRef.current.isDown = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = Date.now();
    ripples.current.push({ x, y, time: now, intensity: 2 });
    ripples.current = ripples.current.filter((r) => now - r.time < 3000);
  }, []);

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isDown = false;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    timeRef.current += animationSpeedRef.current;
    const currentTime = Date.now();
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    ctx.fillStyle = backgroundColorRef.current;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const mouseX = mouseRef.current.x;
    const mouseY = mouseRef.current.y;
    const { r, g, b } = colorRef.current;

    ripples.current = ripples.current.filter(
      (rip) => currentTime - rip.time < 3000
    );

    const BUCKETS = 20;
    const buckets = Array.from({ length: BUCKETS }, () => []);

    dotsRef.current.forEach((dot) => {
      const dx = dot.originalX - mouseX;
      const dy = dot.originalY - mouseY;
      const distSq = dx * dx + dy * dy;
      const mouseInfluence = distSq < 150 * 150
        ? Math.max(0, 1 - Math.sqrt(distSq) / 150)
        : 0;

      let rippleInfluence = 0;
      for (let i = 0; i < ripples.current.length; i++) {
        const ripple = ripples.current[i];
        const age = currentTime - ripple.time;
        const maxAge = 3000;
        const rdx = dot.originalX - ripple.x;
        const rdy = dot.originalY - ripple.y;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
        const rippleRadius = (age / maxAge) * 300;
        const rippleWidth = 60;
        const diff = Math.abs(rdist - rippleRadius);
        if (diff < rippleWidth) {
          const rippleStrength = (1 - age / maxAge) * ripple.intensity;
          const proximity = 1 - diff / rippleWidth;
          rippleInfluence += rippleStrength * proximity;
        }
      }
      rippleInfluence = Math.min(rippleInfluence, 2);

      const totalInfluence = mouseInfluence + rippleInfluence;
      const dotSize =
        2 + totalInfluence * 6 + Math.sin(timeRef.current + dot.phase) * 0.5;
      const opacity = Math.max(
        0.3,
        0.6 +
          totalInfluence * 0.4 +
          Math.abs(Math.sin(timeRef.current * 0.5 + dot.phase)) * 0.1
      );

      const bucketIndex = Math.min(
        BUCKETS - 1,
        Math.floor(((opacity - 0.3) / 0.7) * BUCKETS)
      );
      buckets[bucketIndex].push({ x: dot.originalX, y: dot.originalY, size: dotSize, opacity });
    });

    for (let i = 0; i < BUCKETS; i++) {
      if (buckets[i].length === 0) continue;
      const representativeOpacity = buckets[i][0].opacity;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${representativeOpacity.toFixed(2)})`;
      ctx.beginPath();
      for (const dot of buckets[i]) {
        ctx.moveTo(dot.x + dot.size, dot.y);
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      }
      ctx.fill();
    }

    // eslint-disable-next-line react-hooks/immutability
    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);
    // Listen on window so mouse works even when cursor is over elements above the canvas
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      timeRef.current = 0;
      ripples.current = [];
      dotsRef.current = [];
    };
  }, [animate, resizeCanvas, handleMouseMove, handleMouseDown, handleMouseUp]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default InteractiveDots;
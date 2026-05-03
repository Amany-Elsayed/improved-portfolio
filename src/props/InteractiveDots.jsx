"use client";
import { useEffect, useRef, useCallback } from "react";

const parseColor = (hex) => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
});

/**
 * Parses a gradient config object into something the canvas can use.
 * Accepts either:
 *   - A plain hex string: "#010011"  (solid background)
 *   - A gradient config object:
 *       {
 *         stops: [{ color: "#010011", position: 0 }, { color: "#0d0d2b", position: 1 }],
 *         angle: 135,       // degrees, default 90
 *         animated: true,   // whether the gradient shifts over time, default false
 *         speed: 0.3,       // how fast it shifts (0.1 = slow, 1 = fast), default 0.3
 *       }
 */
const isGradientConfig = (bg) =>
  bg && typeof bg === "object" && Array.isArray(bg.stops);

const buildCanvasGradient = (ctx, width, height, config, time) => {
  const angle = ((config.angle ?? 90) * Math.PI) / 180;

  // Animate both angle and length for a visible sweeping wash of color
  const speed = config.speed ?? 0.3;
  const angleShift = config.animated ? Math.sin(time * speed) * 0.6 : 0;
  const animatedAngle = angle + angleShift;

  // Pulse the gradient length so colors visibly sweep across the canvas
  const lenMultiplier = config.animated
    ? 1 + Math.sin(time * speed * 0.7) * 0.5
    : 1;

  const cx = width / 2;
  const cy = height / 2;
  const len = (Math.sqrt(width * width + height * height) / 2) * lenMultiplier;

  const x1 = cx - Math.cos(animatedAngle) * len;
  const y1 = cy - Math.sin(animatedAngle) * len;
  const x2 = cx + Math.cos(animatedAngle) * len;
  const y2 = cy + Math.sin(animatedAngle) * len;

  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  config.stops.forEach(({ color, position }) => {
    gradient.addColorStop(Math.max(0, Math.min(1, position)), color);
  });
  return gradient;
};

const InteractiveDots = ({
  /**
   * background accepts:
   *   - a hex string:  "#010011"
   *   - a gradient config object:
   *       {
   *         stops: [{ color: "#010011", position: 0 }, { color: "#0d0d2b", position: 1 }],
   *         angle: 135,
   *         animated: true,
   *         speed: 0.3,
   *       }
   */
  background = "#010011",
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
  const backgroundRef = useRef(background);
  const animationSpeedRef = useRef(animationSpeed);

  useEffect(() => {
    colorRef.current = parseColor(dotColor);
  }, [dotColor]);

  useEffect(() => {
    backgroundRef.current = background;
  }, [background]);

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
    const bg = backgroundRef.current;

    // Draw background — solid color or animated canvas gradient
    if (isGradientConfig(bg)) {
      ctx.fillStyle = buildCanvasGradient(
        ctx,
        canvasWidth,
        canvasHeight,
        bg,
        timeRef.current
      );
    } else {
      ctx.fillStyle = bg;
    }
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
      const mouseInfluence =
        distSq < 150 * 150 ? Math.max(0, 1 - Math.sqrt(distSq) / 150) : 0;

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
      buckets[bucketIndex].push({
        x: dot.originalX,
        y: dot.originalY,
        size: dotSize,
        opacity,
      });
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
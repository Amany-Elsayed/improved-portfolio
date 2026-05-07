import useScrollReveal from "../hooks/useScrollReveal";

export default function RevealWrapper({ children, className = "", delay = 0 }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
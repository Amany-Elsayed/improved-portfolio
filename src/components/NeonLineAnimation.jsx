import "./NeonLineAnimation.css"

export default function NeonLineAnimation({ text }) {
  return (
    <div className="neon-line-wrapper">
      <div className="neon-line" />
      <span className="neon-line-text">{text}</span>
    </div>
  );
}
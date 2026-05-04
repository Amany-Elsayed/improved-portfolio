import "./App.css";
import { useEffect, useState } from "react";

export default function CodeSpan() {
  const [displayed, setDisplayed] = useState("");
  const text = "<Code/>";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return <span className="code-span">{displayed}</span>;
}

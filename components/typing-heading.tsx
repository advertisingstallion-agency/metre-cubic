"use client";

import { useEffect, useState } from "react";

export function TypingHeading({
  lines,
  lineClassName,
}: {
  lines: string[];
  lineClassName?: string;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 45);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 300);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex, lines]);

  const done = lineIndex >= lines.length || reduced;

  return (
    <span aria-label={lines.join(" ")}>
      {lines.map((line, i) => {
        const text = reduced
          ? line
          : i < lineIndex
            ? line
            : i === lineIndex
              ? line.slice(0, charIndex)
              : "";
        const showCursor = !done && i === lineIndex;
        return (
          <span
            key={i}
            aria-hidden="true"
            className={`block whitespace-nowrap ${lineClassName ?? ""}`}
          >
            {text}
            {showCursor && (
              <span className="ml-0.5 inline-block h-[0.85em] w-[2px] -translate-y-[1px] animate-pulse bg-current align-middle" />
            )}
          </span>
        );
      })}
    </span>
  );
}

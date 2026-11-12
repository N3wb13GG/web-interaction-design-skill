import type { CSSProperties } from "react";
import "./safari-browser-tint.css";

type Props = {
  color: string;
  edge: "top" | "bottom";
  className?: string;
};

/** Place in the active top layer and verify its viewport containing block. */
export default function SafariBrowserTint({ color, edge, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`safari-browser-tint safari-browser-tint--${edge} ${className}`}
      style={{ "--safari-tint-color": color } as CSSProperties}
    />
  );
}

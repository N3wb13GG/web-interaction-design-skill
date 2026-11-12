import "./safari-top-tint.css";

type SafariTopTintProps = {
  color?: string;
  className?: string;
};

export default function SafariTopTint({ color = "#fff", className = "" }: SafariTopTintProps) {
  return (
    <div aria-hidden="true" className={`safari-top-tint ${className}`} style={{ backgroundColor: color }} />
  );
}

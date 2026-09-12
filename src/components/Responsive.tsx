import type { CSSProperties, ElementType } from "react";

export default function Responsive({
  mobile,
  desktop,
  className = "",
  as: Tag = "p",
  display = "block",
  style,
}: {
  mobile: string;
  desktop: string;
  className?: string;
  as?: ElementType;
  display?: "block" | "inline";
  style?: CSSProperties;
}) {
  const desktopDisplay = display === "inline" ? "hidden sm:inline" : "hidden sm:block";

  return (
    <>
      <Tag className={`sm:hidden ${className}`} style={style}>
        {mobile}
      </Tag>
      <Tag className={`${desktopDisplay} ${className}`} style={style}>
        {desktop}
      </Tag>
    </>
  );
}

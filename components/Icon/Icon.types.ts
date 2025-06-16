export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  direction?: TIconDirection;
}

export type TIconDirection = "top" | "right" | "bottom" | "left";

import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  color?: TButtonColor;
}

export type TButtonVariant = "solid" | "outlined" | "text";
export type TButtonColor = "primary" | "secondary";

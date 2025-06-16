import { twMerge } from "tailwind-merge";

import { ButtonProps } from "./Button.types";
import { baseClasses, disabledClasses, variantClasses } from "./Button.styles";

export function Button({
  children,
  variant = "solid",
  color = "primary",
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        baseClasses,
        variantClasses[variant][color],
        disabled && disabledClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

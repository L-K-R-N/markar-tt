import { twMerge } from "tailwind-merge";
import { AllowedTags, TextProps, TTextVariant } from "./Text.types";

const defaultClasses =
  "text-lg font-semibold flex gap-2 items-center text-black";
const variantClasses: Record<TTextVariant, string> = {
  title: "text-xl font-bold",
  subtitle: "text-md font-bold",
  default: "text-sm font-semibold text-black",
};

export function Text<T extends AllowedTags>({
  className,
  variant = "default",
  text,
  as,
  ...props
}: TextProps<T>) {
  const Component = as || "span";
  return (
    <Component
      className={twMerge(defaultClasses, variantClasses[variant], className)}
      {...props}
    >
      {text}
    </Component>
  );
}

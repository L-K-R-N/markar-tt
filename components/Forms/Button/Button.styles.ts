import { TButtonColor, TButtonVariant } from "./Button.types";

export const baseClasses =
  "rounded-lg px-8 py-2 uppercase cursor-pointer flex items-center justify-center active:opacity-60 hover:opacity-80";

export const variantClasses: Record<
  TButtonVariant,
  Record<TButtonColor, string>
> = {
  solid: {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-black",
  },
  outlined: {
    primary: "border border-blue-600 bg-transparent text-blue-600",
    secondary: "border border-gray-200 bg-transparent text-black",
  },
  text: {
    primary: "border-none bg-transparent text-blue-600",
    secondary: "border-none bg-transparent text-gray-200",
  },
};

export const disabledClasses =
  "opacity-30 cursor-not-allowed hover:opacity-30 active:opacity-30";

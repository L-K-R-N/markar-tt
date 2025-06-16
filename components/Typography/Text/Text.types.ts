import { ComponentPropsWithoutRef } from "react";

export type TextProps<T extends AllowedTags = "span"> = {
  as?: T;
  variant?: TTextVariant;
  className?: string;
  text: string;
} & ComponentPropsWithoutRef<T>;

export type TTextVariant = "title" | "subtitle" | "default";
export type AllowedTags =
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

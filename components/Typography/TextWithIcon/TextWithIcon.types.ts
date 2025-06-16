import { ReactNode } from "react";
import { TextProps } from "../Text/Text.types";

export interface TextWithIconProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  text: string;
  className?: string;
  textProps?: Omit<TextProps, "text">;
}

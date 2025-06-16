import { twMerge } from "tailwind-merge";
import { TextWithIconProps } from "./TextWithIcon.types";
import { Text } from "../Text";

const containerClasses = "flex gap-2 items-center";

export const TextWithIcon = ({
  leftIcon,
  rightIcon,
  text,
  className,
  textProps,
}: TextWithIconProps) => {
  return (
    <div className={twMerge(containerClasses, className)}>
      {leftIcon}
      <Text {...textProps} text={text} />
      {rightIcon}
    </div>
  );
};

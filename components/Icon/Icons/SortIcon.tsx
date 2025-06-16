import { IconProps } from "../Icon.types";

export const SortIcon = ({
  width = 33,
  height = 33,
  color = "black",
  className,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.86279 6.74194H31.137M1.86279 16.5H21.3789M1.86279 26.2581H9.66924"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

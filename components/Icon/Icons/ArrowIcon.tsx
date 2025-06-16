import { twMerge } from "tailwind-merge";
import { IconProps, TIconDirection } from "../Icon.types";

const directionClasses: Record<TIconDirection, string> = {
  top: "",
  right: "rotate-90",
  bottom: "rotate-180",
  left: "-rotate-90",
};

export const ArrowIcon = ({
  width = 33,
  height = 33,
  color = "black",
  className,
  direction = "top",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(directionClasses[direction], className)}
    >
      <g clipPath="url(#clip0_23_2)">
        <path
          d="M2.56027 24.3183L15.444 11.638C15.7251 11.3599 16.1046 11.2039 16.5 11.2039C16.8954 11.2039 17.2749 11.3599 17.556 11.638L30.4398 24.3155C30.7226 24.5935 31.1033 24.7492 31.4999 24.7492C31.8965 24.7492 32.2772 24.5935 32.56 24.3155C32.6993 24.1797 32.81 24.0174 32.8856 23.8382C32.9612 23.6589 33.0001 23.4664 33.0001 23.2719C33.0001 23.0774 32.9612 22.8848 32.8856 22.7056C32.81 22.5263 32.6993 22.364 32.56 22.2283L19.679 9.55075C18.8306 8.7177 17.6891 8.25098 16.5 8.25098C15.311 8.25098 14.1695 8.7177 13.321 9.55075L0.440023 22.2283C0.300318 22.3641 0.189267 22.5265 0.113436 22.706C0.0376055 22.8855 -0.00146484 23.0784 -0.00146484 23.2733C-0.00146484 23.4681 0.0376055 23.661 0.113436 23.8405C0.189267 24.02 0.300318 24.1824 0.440023 24.3183C0.722875 24.5962 1.10358 24.752 1.50015 24.752C1.89672 24.752 2.27742 24.5962 2.56027 24.3183Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_23_2">
          <rect width="33" height="33" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

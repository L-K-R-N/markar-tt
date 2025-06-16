"use client";
import { Icon } from "../Icon";
import { Button } from "../Forms/Button/Button";
import { IconProps } from "../Icon/Icon.types";
import { Typography } from "../Typography";
import { CarImageCarousel } from "../CarImageCarousel";
import { CarCardProps } from "./CarCard.types";
import { useState } from "react";

const containerClasses =
  "bg-white rounded-2xl shadow hover:shadow-lg transition flex-col overflow-hidden";
const defaultIconProps: IconProps = {
  color: "#000338d0",
  width: 22,
  height: 22,
};

export function CarCard({ car }: CarCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };
  return (
    <div className={containerClasses}>
      <CarImageCarousel images={car.images.image.slice(0, 5)} />
      <div className="p-4 pb-5 flex-col flex gap-1.5">
        <div className="flex flex-col  mb-0.5">
          <Typography.Text as="h3" variant="title" text={car.mark_id} />
          <Typography.Text
            className="opacity-40"
            as="h4"
            variant="subtitle"
            text={car.folder_id}
          />
        </div>

        <div className="flex gap-5 opacity-80 my-1">
          <Typography.Text
            className="mt-1"
            variant="title"
            text={`
            ${car.price.toLocaleString("ru")} ₽`}
          />
        </div>
        <Typography.TextWithIcon
          text={car.modification_id}
          leftIcon={<Icon.Car {...defaultIconProps} />}
          className="opacity-80"
        />
        <div className="flex gap-4 text-lg font-semibold opacity-80">
          <Typography.TextWithIcon
            text={`${car.run.toLocaleString()} км`}
            leftIcon={<Icon.Gearbox {...defaultIconProps} />}
          />
          <Typography.TextWithIcon
            text={car.gearbox}
            leftIcon={<Icon.Gearbox {...defaultIconProps} />}
          />
        </div>
        <div className="flex text-lg font-semibold gap-4 opacity-80">
          <Typography.TextWithIcon
            text={car.engine_type}
            leftIcon={<Icon.Engine {...defaultIconProps} />}
          />
          <Typography.TextWithIcon
            text={car.color}
            leftIcon={<Icon.Color {...defaultIconProps} />}
          />
          <Typography.TextWithIcon
            text={car.year.toString()}
            leftIcon={<Icon.Document {...defaultIconProps} />}
          />
        </div>
        <div className="flex gap-3 mt-4">
          <Button
            className="w-[45px] h-[45px] px-0"
            color="secondary"
            onClick={handleLike}
          >
            <Icon.Heart
              width={18}
              height={18}
              color={isLiked ? "red" : "black"}
            />
          </Button>
          <Button
            className="w-[45px] h-[45px] px-0"
            color="secondary"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon.Scales width={18} height={18} />
          </Button>
          <Button
            className="ml-auto text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            Купить
          </Button>
        </div>
      </div>
    </div>
  );
}

import { CarCard } from "../CarCard";
import { Typography } from "../Typography";
import { CarListProps } from "./CarList.types";

export const CarList = ({ cars }: CarListProps) => {
  if (!cars || cars.length === 0) {
    return (
      <div className="text-center py-12 flex justify-center">
        <Typography.Text
          variant="title"
          className="text-center"
          text="Автомобили не найдены"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cars.map((car) => (
        <CarCard key={car.unique_id} car={car} />
      ))}
    </div>
  );
};

"use client";
import Select from "antd/es/select";

import { useSort } from "@/hooks/useSort";
import { Typography } from "../../Typography";
import { SortSelectProps } from "./SortSelect.types";

const selectOptions = [
  {
    value: "default",
    label: "Без сортировки",
  },
  {
    value: "price-asc",
    label: "Цена по возрастанию",
  },
  {
    value: "price-desc",
    label: "Цена по убыванию",
  },
];

export const SortSelect = ({ currentSort, currentOrder }: SortSelectProps) => {
  const handleSortChange = useSort();

  const currentValue =
    currentSort && currentOrder ? `${currentSort}-${currentOrder}` : "default";

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Typography.Text
        variant="subtitle"
        className="font-medium"
        text="Сортировка:"
      />
      <Select
        defaultValue={currentValue}
        onChange={handleSortChange}
        options={selectOptions}
      />
    </div>
  );
};

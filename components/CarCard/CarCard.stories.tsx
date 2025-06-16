import type { Meta, StoryObj } from "@storybook/nextjs";
import { CarCard } from "./CarCard";

const meta: Meta<typeof CarCard> = {
  title: "Cars/CarCard",
  component: CarCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CarCard>;

export const Primary: Story = {
  args: {
    car: {
      color: "Белый",
      engine_type: "Бензин",
      gearbox: "Автоматическая",
      folder_id: "2344",
      run: 43922,
      images: {
        image: [
          "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
          "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
          "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
          "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
        ],
      },
      mark_id: "Kia Sorento",
      modification_id: "2.4 AT (188 л.с.) 4WD",
      price: 1899000,
      unique_id: 34234,
      year: 2020,
    },
  },
};

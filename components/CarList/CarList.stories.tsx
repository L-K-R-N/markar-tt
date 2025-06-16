import type { Meta, StoryObj } from "@storybook/nextjs";
import { CarList } from "./CarList";

const meta: Meta<typeof CarList> = {
  title: "Cars/CarList",
  component: CarList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CarList>;

export const Empty: Story = {
  args: {},
};

export const Four: Story = {
  args: {
    cars: [
      {
        unique_id: 1,
        engine_type: "Бензин",
        gearbox: "Автоматическая",
        mark_id: "Changan",
        folder_id: "CS55 Plus, I Рестайлинг",
        modification_id: "1.5 AMT (181 л.с.)",
        color: "Черный",
        run: 20,
        year: 2023,
        price: 2539000,
        images: {
          image: [
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/86175783bd26.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/4bc4c0d3fdce.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/bd16817c9cc0.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/f358131b6c35.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/8933de2b6e16.jpg",
          ],
        },
      },
      {
        unique_id: 2,
        engine_type: "Бензин",
        gearbox: "Автоматическая",
        mark_id: "Changan",
        folder_id: "CS55 Plus, I Рестайлинг",
        modification_id: "1.5 AMT (181 л.с.)",
        color: "Черный",
        run: 20,
        year: 2023,
        price: 2539000,
        images: {
          image: [
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/86175783bd26.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/4bc4c0d3fdce.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/bd16817c9cc0.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/f358131b6c35.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/8933de2b6e16.jpg",
          ],
        },
      },
      {
        unique_id: 3,
        engine_type: "Бензин",
        gearbox: "Автоматическая",
        mark_id: "Changan",
        folder_id: "CS55 Plus, I Рестайлинг",
        modification_id: "1.5 AMT (181 л.с.)",
        color: "Черный",
        run: 20,
        year: 2023,
        price: 2539000,
        images: {
          image: [
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/86175783bd26.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/4bc4c0d3fdce.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/bd16817c9cc0.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/f358131b6c35.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/8933de2b6e16.jpg",
          ],
        },
      },
      {
        unique_id: 4,
        engine_type: "Бензин",
        gearbox: "Автоматическая",
        mark_id: "Changan",
        folder_id: "CS55 Plus, I Рестайлинг",
        modification_id: "1.5 AMT (181 л.с.)",
        color: "Черный",
        run: 20,
        year: 2023,
        price: 2539000,
        images: {
          image: [
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/86175783bd26.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/4bc4c0d3fdce.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/bd16817c9cc0.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/f358131b6c35.jpg",
            "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/8933de2b6e16.jpg",
          ],
        },
      },
    ],
  },
};

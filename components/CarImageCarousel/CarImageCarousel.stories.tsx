import type { Meta, StoryObj } from "@storybook/nextjs";
import { CarImageCarousel } from "./CarImageCarousel";

const meta: Meta<typeof CarImageCarousel> = {
  title: "Cars/CarImageCarousel",
  component: CarImageCarousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CarImageCarousel>;

export const Primary: Story = {
  args: {
    images: [
      "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
      "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
      "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
      "https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/items/fbb/a91841297/929cd6eb26fc.jpg",
    ],
  },
};

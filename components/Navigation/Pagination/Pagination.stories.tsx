import type { Meta, StoryObj } from "@storybook/nextjs";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 5,
    totalPages: 100,
    onPageChange: () => {},
  },
};

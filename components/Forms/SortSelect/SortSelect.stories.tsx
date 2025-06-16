import type { Meta, StoryObj } from "@storybook/nextjs";
import { SortSelect } from "./SortSelect";

const meta: Meta<typeof SortSelect> = {
  title: "Forms/SortSelect",
  component: SortSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SortSelect>;

export const Primary: Story = {
  args: {},
};

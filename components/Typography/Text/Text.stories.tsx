import { Meta, StoryObj } from "@storybook/nextjs";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const H1: Story = {
  args: {
    as: "h1",
    variant: "default",
    text: "Kia Sorento",
  },
};

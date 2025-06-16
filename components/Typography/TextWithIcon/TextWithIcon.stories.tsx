import { Meta, StoryObj } from "@storybook/nextjs";
import { TextWithIcon } from "./TextWithIcon";
import { Icon } from "../../Icon";

const meta: Meta<typeof TextWithIcon> = {
  title: "Typography/TextWithIcon",
  component: TextWithIcon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextWithIcon>;

export const LeftIcon: Story = {
  args: {
    leftIcon: <Icon.Car />,
    text: "2.4 AT (188 л.с.) 4WD",
  },
};
export const RightIcon: Story = {
  args: {
    rightIcon: <Icon.Car />,
    text: "2.4 AT (188 л.с.) 4WD",
  },
};
export const BothIcons: Story = {
  args: {
    leftIcon: <Icon.Car />,
    rightIcon: <Icon.Car />,
    text: "2.4 AT (188 л.с.) 4WD",
  },
};

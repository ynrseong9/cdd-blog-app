import type { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";

const meta = {
  title: "Atoms/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "블로그 제목",
  },
};

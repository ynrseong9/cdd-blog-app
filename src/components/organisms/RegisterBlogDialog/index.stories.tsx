import type { Meta, StoryObj } from "@storybook/react";
import { RegisterBlogDialog } from ".";

const meta = {
  title: "Organisms/RegisterBlogDialog",
  component: RegisterBlogDialog,
} satisfies Meta<typeof RegisterBlogDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

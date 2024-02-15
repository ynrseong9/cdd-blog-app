import type { Meta, StoryObj } from "@storybook/react";
import { BlogListPage } from ".";

const meta = {
  title: "Pages/BlogListPage",
  component: BlogListPage,
} satisfies Meta<typeof BlogListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    posts: [
      { id: 1, title: "blog title 1", body: "blog body 1" },
      { id: 2, title: "blog title 2", body: "blog body 2" },
      { id: 3, title: "blog title 3", body: "blog body 3" },
    ],
  },
};

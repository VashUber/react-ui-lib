import { Avatar } from "../components";
import "../components/Global/global.scss";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <div>
    <Avatar {...args} />
  </div>
);

export const Example = Template.bind({});

Example.args = {
  src: "https://courses.wesbos.com/images/wesbos-logo.png",
};

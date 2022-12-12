import { Button } from "../components";
import "../components/Global/global.scss";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args} />
  </div>
);

export const Example = Template.bind({});

Example.args = {
  children: "Click",
};

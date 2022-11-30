import { Button, GlobalStyle } from "../components";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <GlobalStyle />
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children: "Click",
};
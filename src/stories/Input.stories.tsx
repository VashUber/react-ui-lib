import { Input, GlobalStyle } from "../components";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div>
    <GlobalStyle />
    <Input {...args} />
  </div>
);

export const Example = Template.bind({});

Example.args = {
  placeholder: "Type something...",
};

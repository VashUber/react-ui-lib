import { Loader, GlobalStyle } from "../components";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <div>
    <GlobalStyle />
    <Loader {...args} />
  </div>
);

export const Example = Template.bind({});

Example.args = {};

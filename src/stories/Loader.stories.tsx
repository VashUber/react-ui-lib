import { Loader } from "../components";
import { GlobalStyle } from "../components/Global";

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

export const LoaderStory = Template.bind({});

LoaderStory.args = {};

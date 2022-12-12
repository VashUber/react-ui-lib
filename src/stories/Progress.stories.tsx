import { Progress } from "../components";
import "../components/Global/global.scss";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <>
    <Progress {...args} />
  </>
);

export const Example = Template.bind({});

Example.args = {
  value: 60,
};

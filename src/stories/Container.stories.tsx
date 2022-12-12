import { Container } from "../components";
import "../components/Global/global.scss";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <div>
    <Container {...args}>content</Container>
  </div>
);

export const Example = Template.bind({});

Example.args = {};

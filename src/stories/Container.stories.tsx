import { Container, GlobalStyle } from "../components";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <div>
    <GlobalStyle />
    <Container {...args}>content</Container>
  </div>
);

export const Example = Template.bind({});

Example.args = {};

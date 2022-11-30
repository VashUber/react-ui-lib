import { FC } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const Button: FC = () => {
  return <button>click</button>;
};

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

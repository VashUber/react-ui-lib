import { Input, GlobalStyle } from "../components";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [state, setState] = useState("");

  return (
    <div>
      <GlobalStyle />
      <Input
        {...args}
        value={state}
        onChange={(e) => setState((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};

export const Example = Template.bind({});

Example.args = {
  placeholder: "Type something",
};

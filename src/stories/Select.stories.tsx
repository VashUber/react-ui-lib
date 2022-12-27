import { Select, MenuItem } from "../components";
import "../components/Global/global.scss";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<number>(null!);

  return (
    <div>
      <Select
        {...args}
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      >
        <MenuItem value={1}>Label 1</MenuItem>
        <MenuItem value={2}>Label 2</MenuItem>
        <MenuItem value={3}>Label 3</MenuItem>
      </Select>
    </div>
  );
};

export const Example = Template.bind({});

Example.args = {
  placeholder: "Select",
};

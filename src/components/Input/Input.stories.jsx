import React from "react";

import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    allowClear: { control: "boolean" },
    bordered: { control: "boolean" },
    size: { control: "inline-radio", options: ["small", "middle", "large"] },
    textColor: { control: "color" },
  },
};

export const MyInput = (args) => <Input {...args} />;

const Default = MyInput.bind({});

Default.args = {
  placeholder: "ИСНА - это...",
  allowClear: true,
  bordered: true,
  size: "middle",
  textColor: "#000",
};

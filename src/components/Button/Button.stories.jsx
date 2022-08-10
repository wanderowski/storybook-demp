import React from "react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    type: {
      control: "radio",
      options: ["default", "primary", "danger", "link"],
    },
    size: {
      control: "radio",
      options: ["small", "middle", "large"],
    },
    shape: {
      control: "radio",
      options: ["default", "circle", "round"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.storyName = "My Button";

Primary.args = {
  text: "Samgau Meet-Up",
  type: "primary",
  size: "middle",
  shape: "default",
  disabled: false,
  block: false,
  styles: {},
};

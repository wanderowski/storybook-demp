import React from "react";

import Modal from "./Modal";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {
    isVisible: { control: "boolean" },
    onCancel: { action: "onCancel" },
  },
};

export const Template = (args) => {
  return <Modal {...args} />;
};

const MyModal = Template.bind({});

MyModal.args = {
  isVisible: true,
  onCancel: () => {},
};

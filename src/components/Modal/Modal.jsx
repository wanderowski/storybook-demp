import { Modal } from "antd";
import React from "react";

export default function MyModal({ isVisible, onCancel, children }) {
  return (
    <Modal onCancel={onCancel} visible={isVisible}>
      {children}
    </Modal>
  );
}

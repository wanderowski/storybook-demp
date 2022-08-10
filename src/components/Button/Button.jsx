import React from "react";
import { Button } from "antd";

export default function MyButton({
  text,
  type = "default",
  size = "middle",
  shape = "default",
  disabled = false,
  block = false,
  styles,
}) {
  return (
    <Button
      type={type}
      size={size}
      shape={shape}
      disabled={disabled}
      block={block}
      style={styles}
    >
      {text || "Samgau Meet-Up"}
    </Button>
  );
}

import React from "react";
import { Input } from "antd";

export default function MyInput({
  placeholder,
  allowClear,
  bordered,
  size,
  textColor,
}) {
  return (
    <Input
      placeholder={placeholder || "Введите текст..."}
      allowClear={allowClear}
      bordered={bordered}
      size={size}
      style={{ color: textColor }}
    />
  );
}

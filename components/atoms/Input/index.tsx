import React from "react";
import InputStyle from "./style";

export interface Props {
  testId?: string;
  className?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  border?: string;
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  color?: string;
  bgColor?: string;
  padding?: string;
  radius?: string;
  //
  va?: string;
  disabled?: boolean;
  _onChange?: any;
  _onKeyPress?: any;
}

export const Input: React.FC<Props> = ({
  testId,
  className,
  id,
  type,
  name,
  value,
  disabled,
  placeholder,
  _onChange,
  _onKeyPress,
  ...props
}): React.ReactElement => {
  return (
    <InputStyle
      data-testid={testId}
      className={className}
      id={id}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onChange={_onChange}
      onKeyPress={_onKeyPress}
      {...props}
    />
  );
};

Input.defaultProps = {
  testId: 'test-atom-input',
  _onChange: () => { },
  _onKeyPress: () => { },
  type: "text",
  placeholder: "",
  width: "100%",
  height: "48px",
  bgColor: "white",
  padding: "8px 0",
  radius: "0",
  border: "none",
};

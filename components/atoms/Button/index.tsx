import React from "react";
import ButtonStyle from "./style";

export interface Props {
  testId?: string;
  width?: string;
  height?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  padding?: string;
  border?: string;
  fs?: string;
  fw?: string;
  color?: string;
  shadow?: string;
  disabled?: any;
  addstyle?: any;
  type?: "submit" | "reset" | "button" | undefined;
  _onClick?: () => void;
  _onFocus?: () => void;
  children?: any;
}

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { disabled, type, _onClick, children, testId, ...props },
    ref
  ): React.ReactElement => {
    return (
      <ButtonStyle
        data-testid={testId}
        type={type}
        ref={ref}
        onClick={_onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </ButtonStyle>
    );
  }
);

Button.defaultProps = {
  testId: 'button',
  disabled: false,
  fw: "bold",
  type: "button",
  border: "none",
  radius: "6px",
  padding: "12px 0",
  bgColor: "brandColor",
  _onClick: () => { },
};

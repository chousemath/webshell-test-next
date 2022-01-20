import React from "react";
import TextStyle from "./style";

export interface Props {
  className?: string;
  testId?: string;
  children?: any;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  fs?: string;
  fw?: string;
  color?: string;
  lh?: string;
  textAlign?: string;
  ls?: string;
  wb?: string;
  ws?: string;
  cursor?: string;
  addstyle?: any;
  overflow?: string;
  _onClick?: () => void;
}

export const Text: React.FC<Props> = ({
  testId,
  _onClick,
  children,
  ...props
}): React.ReactElement => {
  return (
    <TextStyle data-testid={testId} onClick={_onClick} {...props}>
      {children}
    </TextStyle>
  );
};

Text.defaultProps = {
  testId: "test-atom-text",
};

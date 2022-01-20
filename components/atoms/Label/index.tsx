import React from "react";
import LabelStyle from "./style";

export interface Props {
  testId?: string;
  className?: string;
  id?: string;
  children?: any;
  fw?: string;
  fs?: string;
  color?: string;
  lh?: string;
  textAlign?: string;
  margin?: string;
  width?: string;
  height?: string;
  paddig?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  z?: string;
  addstyle?: any;
}

export const Label: React.FC<Props> = ({
  testId,
  className,
  id,
  children,
  ...props
}): React.ReactElement => {
  return (
    <LabelStyle
      data-testid={testId}
      htmlFor={id}
      className={className}
      {...props}>
      {children}
    </LabelStyle>
  );
};

Label.defaultProps = {
  testId: 'test-atom-label',
};
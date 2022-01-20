import React, { ReactNode } from "react";
import { StyledRow } from "./styles";

export interface RowProps {
  testId?: string;
  children?: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  padding?: string;
  className?: string;
  margin?: string;
  border?: string;
}

export const Row: React.FC<RowProps> = ({ testId, ...props }) => {
  return (
    <StyledRow data-testid={testId} className={props.className} {...props}>
      {props.children}
    </StyledRow>
  );
};

Row.defaultProps = {
  testId: "test-atom-row",
};

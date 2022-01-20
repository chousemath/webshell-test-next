import React, { ReactNode } from "react";
import { StyledColumn } from "./styles";

export interface ColumnProps {
  testId?: string;
  children?: ReactNode;
  className?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  position?: string;
}

export const Column: React.FC<ColumnProps> = ({ testId, children, ...props }) => {
  return <StyledColumn
    data-testid={testId}
    {...props}>
    {children}
  </StyledColumn>;
};

Column.defaultProps = {
  testId: 'test-atom-column',
};
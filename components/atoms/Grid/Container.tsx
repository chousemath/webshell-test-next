import React, { ReactNode } from "react";
import { StyledContainer } from "./styles";

export interface ContainerProps {
  testId?: string;
  children?: ReactNode;
  className?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  radius?: string;
}

export const Container: React.FC<ContainerProps> = ({
  testId,
  children,
  className,
  ...props
}) => {
  return (
    <StyledContainer
      data-testid={testId}
      className={className}
      {...props}>
      {children}
    </StyledContainer>
  );
};

Container.defaultProps = {
  testId: 'test-atom-container',
  margin: "0 auto",
};
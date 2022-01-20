import React, { ReactNode } from "react";
import { StyledAppContainer } from "./styles";

interface AppContainerProps {
  testId?: string;
  children?: ReactNode;
  className?: string;
}

export const AppContainer: React.FC<AppContainerProps> = ({
  testId,
  children,
  className,
}) => {
  return (
    <StyledAppContainer
      data-testid={testId}
      className={className}>
      {children}
    </StyledAppContainer>
  );
};

AppContainer.defaultProps = {
  testId: 'test-atom-appcontainer',
};
import React from "react";

import { Container } from "./Container";
import { Column, ColumnProps } from "./Column";
import { Row, RowProps } from "./Row";

type GridProps = ColumnProps & RowProps;

export const Grid: React.FC<GridProps> = ({
  testId,
  alignItems,
  justifyContent,
  children,
  className,
}) => {
  return (
    <Container testId={testId} className={className}>
      <Row alignItems={alignItems} justifyContent={justifyContent}>
        <Column>{children}</Column>
      </Row>
    </Container>
  );
};

Grid.defaultProps = {
  testId: 'test-atom-grid',
};
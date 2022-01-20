import styled from "@emotion/styled";
import type { ContainerProps } from "./Container";
import type { ColumnProps } from "./Column";
import type { RowProps } from "./Row";

export const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export const StyledColumn = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};

  &.center {
    justify-content: center;
  }
`;

export const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ border }) => border && `border: ${border}`};
`;

export const StyledAppContainer = styled.div`
  width: 100%;
  max-width: 420px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;
  background-color: #fff;
  // 스크롤바 숨김
  &::-webkit-scrollbar {
    display: none;
  }
`;

import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 16px 0;

  & > div {
    margin-right: 14px;
  }
`;

export const Span = styled.span<ITheme>`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

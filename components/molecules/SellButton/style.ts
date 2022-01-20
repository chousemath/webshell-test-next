import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

export const ButtonBox = styled.div<ITheme>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 0 25%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  & > span {
    font-size: 2.1rem;
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
    text-align: center;
  }
`;

export const LeftImageBox = styled.div`
  position: absolute;
  left: 10px;
`;

export const RightImageBox = styled.div`
  position: absolute;
  right: 10px;
`;

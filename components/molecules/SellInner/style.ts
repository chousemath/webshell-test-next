import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

export const ButtonBox = styled.div<ITheme>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 29%;
  background-color: rgba(251, 251, 251, 1);
  border: none;
  & > span {
    font-size: 2.1rem;
    font-weight: ${({ theme }) => theme.fontWeights.light};
    color: rgba(211, 211, 211, 1);
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

import styled from "@emotion/styled";
import { AccountButtonProps } from "../../../interfaces/IElements";

export const ButtonBox = styled.div<AccountButtonProps>`
  font-family: Noto Sans KR, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  height: 50px;
  border-radius: 12px;
  letter-spacing: -0.62px;
`;

export const Icon = styled.img`
  position: absolute;
  width: 18px;
  margin-right: 6px;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
`;

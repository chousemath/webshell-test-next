import styled from "@emotion/styled";
import { flexbox } from "../../../styles/utils/flexbox";

export const UserImgGrid = styled.div<any>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  overflow: hidden;
`;

export const UserInfoContainer = styled.section``;
export const ButtonsWrap = styled.div`
  ${flexbox("start")};
  margin-top: 10px;
`;

export const Container = styled.div`
  padding: 16px;
`;
export const RowWrap = styled.div`
  ${flexbox("between")};
  margin-top: 18px;
  background: #fafafa;
  border-radius: 12px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 96px;
`;

import styled from "@emotion/styled";
import { flexbox } from "../../../styles/utils/flexbox";

export const NotiContainer = styled.div`
  padding: 16px;
`;
export const NotiWrap = styled.div`
  ${flexbox()};
  border-bottom: 1px solid #f1f1f1;
`;
export const NotiImgWrap = styled.div`
  width: 100px;
`;
export const NotiContent = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 1.4rem;
`;

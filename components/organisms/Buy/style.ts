import styled from "@emotion/styled";
import { flexbox } from "../../../styles/utils/flexbox";

export const InstantItem = styled.div`
  flex: 1;
  padding: 20px 0;
  text-align: center;
  &:nth-of-type(1) {
    border-right: 1px solid #ddd;
  }
`;
export const AreaList = styled.ul`
  ${flexbox()};
  width: 100%;
  margin-top: 10px;
  padding: 4px;
  border-radius: 80px;
  background-color: #ebebeb;
`;
export const AreaItem = styled.li`
  flex: 1;
  padding: 14px 0;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 80px;
  &.now {
    font-weight: 700;
    color: #fff;
    background-color: #ef6253;
  }
`;

export const DeliveryWrap = styled.div`
  ${flexbox("start")};
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 8px;
`;

export const PayList = styled.ul`
  ${flexbox("start")};
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const PayItem = styled.li`
  width: calc(50% - 8px);
  margin: 4px;
  padding: 18px 10px;
  font-size: 1.3rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

import styled from "@emotion/styled";
import { flexbox } from "../../../styles/utils/flexbox";

export const ProductContainer = styled.div`
  position: relative;
  padding-left: 1.6rem;
`;

export const StyleContainer = styled.div`
  position: relative;
  padding: 10px 0 0 16px;
  border-top: 1px solid #ebebeb;
`;

export const Container = styled.div`
  position: relative;
  margin: 7px 0 20px;
  padding: 0 16px 0 0;
`;

export const CardContainer = styled.div`
  ${flexbox("between")};
  flex-wrap: wrap;
  margin: 20px 0 0;
`;
export const CardGrid = styled.div`
  flex: 1;
  min-height: 255px;
  &:nth-of-type(odd) {
    padding-right: 4px;
  }
  &:nth-of-type(even) {
    padding-left: 4px;
  }
`;

export const CardMoreWrap = styled.div`
  text-align: right;
  button {
    padding-bottom: 3px;
    text-decoration: underline;
    text-underline-position: under;
  }
`;

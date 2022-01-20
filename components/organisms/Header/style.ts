import styled from "@emotion/styled";
import { flexbox, inlineFlexbox } from "../../../styles/utils/flexbox";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  height: 5.7rem;
  padding: 8px 16px;
  border-bottom: 1px solid #ebebeb;
  background-color: #fff;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  border-radius: 8px;

  input {
    width: 100%;
    height: 100%;
    padding: 0 0 0 40px;
  }
  input:focus {
    outline: none;
  }
`;

// 구매
export const BuyContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 420px;
  height: 50px;
  background-color: #fff;
  z-index: 100;
`;
export const Container = styled.nav`
  ${flexbox("between")};
  padding: 5px 10px;
`;
// header에 fixed가 적용되어있으면 그 높이만큼 빼주기 위해
export const FixedHeight = styled.div`
  padding-top: 50px;
`;

export const BuyOption = styled.span`
  display: block;
  font-size: 1.3rem;
  color: rgba(34, 34, 34, 0.5);
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
`;

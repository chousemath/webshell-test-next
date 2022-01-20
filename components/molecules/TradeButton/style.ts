import styled from "@emotion/styled";
import { TradeButtonProps } from "../../../interfaces/IElements";

export const Button = styled.button<TradeButtonProps>`
  box-sizing: border-box;
  margin-top: 0;
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 52px;
  // height: inherit;
  display: inline-flex;
  color: #fff;
  background-color: ${({ isBuyButton }) =>
    isBuyButton ? "#ef6253" : "#41b979"};
  text-decoration: none;
  margin-left: ${({ isBuyButton }) => (isBuyButton ? "0" : "6px")};
  align-items: center;
  flex: 1;
  ::before {
    left: 42px;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: rgba(34, 34, 34, 0.1);
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
  width: 44px;
  font-size: 1.5rem;
  letter-spacing: -0.15px;
  text-align: center;
`;

export const InnerBox = styled.div`
  margin-left: 1rem;
  line-height: 1.5rem;
  &:nth-of-type(2) {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    color: hsla(0 0%, 100%, 0.8);
  }
`;

export const Span = styled.span`
  display: block;
`;

export const Won = styled.span`
  font-size: 1.3rem;
  letter-spacing: -0.06px;
  font-weight: 700;
`;

export const Em = styled.em`
  font-size: 1.2rem;
  vertical-align: top;
  font-weight: 700;
`;

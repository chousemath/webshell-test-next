import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import { inlineFlexbox } from "../../../styles/utils/flexbox";
import { scrollBox } from "../../../styles/utils/scrollbox";

export const OrderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 420px;
  height: 50px;
  background-color: #fff;
  z-index: 100;
`;
export const OrderButton = styled.button`
  min-width: 5.6rem;
  font-size: 1.6rem;
  padding: 6px 14px;
  color: #000;
  border-radius: 24px;
  &.on {
    background-color: #000;
    font-weight: bold;
    color: #fff;
  }
`;

export const HashTagContainer = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  padding: 10px 8px;
  white-space: nowrap;
  text-align: left;
`;

export const HashTag = styled.button`
  display: inline-block;
  padding: 8px 10px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  margin-left: 8px;
`;

export const ScrollBox = styled.div`
  ${scrollBox()};
`;
export const ScrollContainer = styled.ul`
  ${inlineFlexbox("start")};
  padding: 0px 16px 16px;
`;
export const QuickFilterBox = styled.li<ITheme>`
  margin-right: 8px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.liteGray};
  cursor: pointer;
`;
export const BrandBox = styled.li<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  text-align: center;
  cursor: pointer;
`;
export const BrandImgBox = styled.div`
  width: 60px;
  height: 60px;
`;

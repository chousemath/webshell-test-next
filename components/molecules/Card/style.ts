import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import { flexbox } from "../../../styles/utils/flexbox";
interface IProp {
  fw?: string;
}
export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #f4f4f4;
  border-radius: 8px;
  overflow: hidden;
  &.styleCardGrid {
    height: 180px;
    overflow: hidden;
  }
  &.listCardImg {
    height: 150px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 9px;
  right: 17px;
`;

export const UserProfileWrap = styled.div`
  position: relative;
  top: 8px;
  left: 8px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  z-index: 10;
  border: 2px solid #fff;
  overflow: hidden;
`;

export const UserNameWrap = styled.div`
  position: absolute;
  left: 8px;
  bottom: 12px;
`;

// card title
export const TitleContainer = styled.div`
  margin-top: 22px;
`;
export const Title = styled.h2<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
export const SubTitle = styled.p<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(34, 34, 34, 0.5);
`;

// item title
export const ItemTitleContainer = styled.div<ITheme>`
  &.productListInfo {
    h2 {
      border: 0;
    }
    strong {
      padding-top: 11px;
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
  }
  &.productDetailInfo {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
    strong {
      padding-top: 11px;
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
  }
`;
export const ItemTitle = styled.h2<ITheme>`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  white-space: nowrap;
  border-bottom: 1px solid #222;
`;
export const Desc = styled.p<ITheme>`
  /* margin-top: 8.5px; */
  max-height: 34px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.7rem;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const ExpressMark = styled.span<ITheme>`
  display: inline-block;
  margin-top: 4px;
  padding: 3px 5.5px 4px 17px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  letter-spacing: -0.33px;
  line-height: 11px;
  vertical-align: top;
  color: ${({ theme }) => theme.colors.green};
  border: 1px solid #31b46e;
`;

export const Price = styled.strong<ITheme>`
  display: block;
  padding-top: 7px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.04px;
`;

// 상품 리스트

export const InterestContainer = styled.ul`
  ${flexbox("between")};
  padding-top: 12px;
`;
export const InterestBox = styled.li<ITheme>`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

/* SellerCard */
export const FollowButton = styled.button`
  width: 60px;
  height: 30px;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  padding: 0 10px;
  border-radius: 4px;

  &.on {
    background-color: gray;
  }
`;

// buyCard
export const BuyCardContainer = styled.div`
  ${flexbox("btween")};
  padding: 16px;
  border-bottom: 8px solid #f4f4f4;
`;
export const ImageGrid = styled.div`
  width: auto;
  height: 100px;
  border-radius: 8px;
  background-color: #f1f1f1;
  overflow: hidden;
`;
export const ItemInfo = styled.div`
  flex: 1;
  padding-left: 16px;
  overflow: hidden;
`;

export const ProductText = styled.p<IProp>`
  font-size: 1.4rem;
  font-weight: ${({ fw }) => fw};
  line-height: 1.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &.detail {
    font-size: 1.3rem;
    color: rgba(34, 34, 34, 0.5);
  }
`;

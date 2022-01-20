import { useState } from "react";

import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import { IProductDetailInfoData } from "../../../interfaces/IElements";

export const ProductDetailPurchaseBtn: React.FC = () => {
  const [isImmediatelyBuy, setIsImmediatelyBuy]: any = useState(false);
  const onClick = () => {
    isImmediatelyBuy ? setIsImmediatelyBuy(false) : setIsImmediatelyBuy(true);
  };
  return (
    <Container onClick={onClick}>
      <ButtonBox>
        <button>구매 입찰</button>
      </ButtonBox>
      <ButtonBox>
        <button>즉시 구매</button>
      </ButtonBox>
      <MovingBox isImmediatelyBuy={isImmediatelyBuy}>
        <span>{isImmediatelyBuy ? "즉시 구매" : "구매 입찰"}</span>
      </MovingBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  border-radius: 50px;
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 45px;
  line-height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ButtonBox = styled.div<ITheme>`
  width: 50%;
  text-align: center;

  & > button {
    font-size: ${({ theme }) => theme.fontSizes.base};
    &:hover {
      color: gray;
      cursor: pointer;
    }
  }
`;

const MovingBox = styled.div<any>`
  position: absolute;
  left: ${({ isImmediatelyBuy }) => (isImmediatelyBuy ? "50%" : "0")};
  top: 0;
  border-radius: 50px;
  width: 50%;
  height: 45px;
  line-height: 45px;
  background-color: rgb(244, 99, 55);
  text-align: center;

  & > span {
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

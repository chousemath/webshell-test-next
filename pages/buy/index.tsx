import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { flexbox } from "../../styles/utils/flexbox";
import { Row, Text } from "../../components/atoms";
import { BuyCard } from "../../components/molecules/Card/Buy/BuyCard";
import { BuyHeader } from "../../components/organisms/Header/BuyHeader";
import Layout from "../../components/organisms/Layout/Layout";

const BuyProduct: React.FC = () => {
  const [optionCheck, setOptionCheck] = useState({ price: "", check: false });
  const options = [
    { size: "xs", price: "1,000" },
    { size: "S", price: "2,000" },
    { size: "M", price: "3,000" },
    { size: "L", price: "4,000" },
    { size: "XL", price: "5,000" },
  ];

  const onChecked = (price: string) => {
    setOptionCheck({ ...optionCheck, check: true, price: price });
  };

  return (
    <Layout>
      <BuyHeader option />
      {/* 구매 상품 카드 정보 추후 수정 예정*/}
      <BuyCard />
      <Row
        justifyContent="start"
        alignItems="center"
        margin="10px 0 0 0"
        padding="16px"
      >
        {options.map((option: any, index: number) => {
          return (
            <OptionBox
              key={index}
              className={optionCheck.price === option.price ? "check" : ""}
              onClick={() => onChecked(option.price)}
            >
              <div>
                <Text fs="1.4rem">{option.size}</Text>
                <Text fs="1.4rem" color="#f15746">
                  {option.price}
                </Text>
              </div>
            </OptionBox>
          );
        })}
      </Row>
      <BottomWrap>
        {optionCheck.check && (
          <BottomButton>
            <Link href="/buy/check">
              <a>
                <span>{optionCheck.price} </span>
                일반배송(5~7일소요)
              </a>
            </Link>
          </BottomButton>
        )}
      </BottomWrap>
    </Layout>
  );
};

export const BuyContainer = styled.div`
  padding: 16px;
`;
export const MainContainer = styled.div<any>`
  ${flexbox()}
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
export const OptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(33.33333% - 8px);
  height: 52px;
  margin: 4px;
  text-align: center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;

  &.check {
    border: 1px solid black;
  }
`;
export const BottomWrap = styled.div`
  position: absolute;
  bottom: 70px;
  width: 100%;
  max-width: 420px;
`;
export const BottomButton = styled.div`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 0;
  /* width: calc(100% - 32px); */
  height: 50px;
  color: #fff;
  border-radius: 8px;
  background-color: #333;
  cursor: pointer;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
  }
  span {
    padding-bottom: 2px;
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  line-height: 3rem;
  span {
    color: #f15746;
  }
`;

export const GrayLine = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f4f4f4;
`;

export const ButtonContainer = styled.div`
  padding-bottom: 50px;
`;

export const CheckButton = styled.button`
  width: 100%;
  height: 52px;
  margin: 20px 0;
  text-align: center;
  border-radius: 8px;
  background-color: #000;

  .btn {
    display: block;
    font-size: 1.6rem;
    line-height: 48px;
    color: #fff;
  }
  :disabled {
    background-color: #ddd;
    cursor: not-allowed;
    a {
      cursor: not-allowed;
    }
  }
`;

export const ProductInfo = styled.div`
  padding: 10px 0;
  border-top: 2px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

export const TotalPriceWrap = styled.div`
  padding: 16px 0;
`;

export default BuyProduct;

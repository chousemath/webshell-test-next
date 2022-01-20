import React from "react";
import Link from "next/link";
import Layout from "../../../../components/organisms/Layout/Layout";
import { BuyHeader } from "../../../../components/organisms/Header/BuyHeader";
import { BuyCard } from "../../../../components/molecules/Card/Buy";
import { ButtonContainer, BuyContainer, CheckButton } from "../../index";
import { TotalPriceWrap } from "../../index";
import {
  PriceInfo,
  PriceInstant,
  PriceTitle,
} from "../../../../components/organisms/Buy";

const BuyNow: React.FC = () => {
  return (
    <Layout>
      <BuyHeader />
      <BuyCard />
      <BuyContainer>
        {/* 상품 구매 및 입찰 정보, 추후 데이터 받아서 props로 전달예정  */}
        <PriceInstant />
        <PriceTitle title="즉시 구매가" price="137,000" />
        <PriceInfo point />
        {/* 총 결제 금액 정보 */}
        <TotalPriceWrap>
          <PriceTitle
            title="총 결제금액"
            price="138,500"
            total
            color="#f15746"
          />
          <ButtonContainer>
            <CheckButton>
              <Link href="/buy/delivery/1">
                <a className="btn">즉시 구매 계속</a>
              </Link>
            </CheckButton>
          </ButtonContainer>
        </TotalPriceWrap>
      </BuyContainer>
    </Layout>
  );
};

export default BuyNow;

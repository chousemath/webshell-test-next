import React from "react";
import Layout from "../../../../components/organisms/Layout/Layout";
import { BuyCard } from "../../../../components/molecules/Card/Buy";
import { BuyContainer, ButtonContainer, CheckButton } from "../../index";
import { BuyHeader } from "../../../../components/organisms/Header/BuyHeader";
import { FormBuyCheckBox } from "../../../../components/molecules/Form/FormBuyCheckBox";
import {
  DeliveryInfo,
  PayInfo,
  PriceInfo,
  PriceTitle,
} from "../../../../components/organisms/Buy";
import Link from "next/link";
const data = [
  {
    title:
      "판매자의 판매거부, 배송지연, 미입고 등의 사유가 발생할 경우, 거래가 취소될 수 있습니다.",
    text: "앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알림을 받을 수 없습니다.",
  },
  {
    title:
      "‘바로 결제하기’ 를 선택하시면 즉시 결제가 진행되며, 단순 변심이나 실수에 의한 취소가 불가능합니다.",
    text: "본 거래는 개인간 거래로 전자상거래법(제17조)에 따른 청약철회(환불, 교환) 규정이 적용되지 않습니다.",
  },
  {
    title: "구매 조건을 모두 확인하였으며, 거래 진행에 동의합니다.",
  },
];
const BuyDelivery: React.FC = () => {
  return (
    <Layout>
      <BuyHeader />
      {/* 구매 상품 카드 정보 추후 수정 예정*/}
      <BuyCard />
      <BuyContainer>
        <DeliveryInfo />
        <PriceInfo />
        <PayInfo />
        {/* 구매 동의 정보  */}
        {data.map((item, index) => {
          return (
            <FormBuyCheckBox key={index} title={item.title} text={item.text} />
          );
        })}
        <PriceTitle title="총 결제금액" price="137,000" color="#f15746" />
        <ButtonContainer>
          <CheckButton>
            <Link href="/main">
              <a className="btn">결제하기</a>
            </Link>
          </CheckButton>
        </ButtonContainer>
      </BuyContainer>
    </Layout>
  );
};

export default BuyDelivery;

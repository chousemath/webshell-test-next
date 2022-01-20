import React from "react";
import Link from "next/link";
import Layout from "../../../components/organisms/Layout/Layout";
import { Row } from "../../../components/atoms";
import { BuyCard } from "../../../components/molecules/Card/Buy/BuyCard";
import { FormBuyCheckBox } from "../../../components/molecules/Form/FormBuyCheckBox";
import { BuyContainer, Title, ButtonContainer, CheckButton } from "../index";

const data = [
  {
    title: "구매하려는 상품이 맞습니다.",
    text: "상품 이미지, 모델번호, 출시일, 상품명, 사이즈를 한 번 더 확인했습니다.",
  },
  {
    title: "국내/해외에서 발매한 정품 · 새상품입니다.",
    text: "모든 구성품이 그대로이며, 한 번도 착용하지 않은 정품・새상품입니다. 국내 발매 상품 여부는 확인드리지 않습니다.",
  },
  {
    title: "제조사에서 불량으로 인정하지 않는 기준은 하자로 판단하지 않습니다.",
    text: "박스/패키지와 상품 컨디션에 민감하시다면 검수 기준을 반드시 확인하시기 바랍니다.",
    checkView: "검수기준 보기",
  },
  {
    title: "KREAM의 최신 이용정책을 모두 확인하였으며, 구매를 계속합니다.",
    text: "건전하고 안전한 거래를 위해 반드시 숙지해야 할 미입고, 페널티, 부정거래 등의 이용정책을 확인했습니다.",
    checkView: "이용정책 보기",
  },
];
const Check: React.FC = ({}) => {
  return (
    <Layout header="buy">
      <Row padding="0 16px">
        <Title>
          <span>구매</span>하시기 전에
          <br /> 꼭 확인하세요.
        </Title>
      </Row>
      {/* 구매 상품 카드 정보 추후 수정 예정*/}
      <BuyCard />
      <BuyContainer>
        {data.map((item, index) => {
          return (
            <FormBuyCheckBox
              key={index}
              title={item.title}
              text={item.text}
              checkView={item.checkView}
            />
          );
        })}
        <ButtonContainer>
          <CheckButton>
            <Link href="/buy/now/44160?size=XL">
              <a className="btn">구매계속</a>
            </Link>
          </CheckButton>
        </ButtonContainer>
      </BuyContainer>
    </Layout>
  );
};

export default Check;

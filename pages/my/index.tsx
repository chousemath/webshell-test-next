import React from "react";
import styled from "@emotion/styled";
import { flexbox } from "../../styles/utils/flexbox";
import { Row, Text } from "../../components/atoms";
import { UserDetail } from "../../components/organisms/User";
import { RecentHistoryList } from "../../components/organisms/User";
import { ProductList } from "../../components/organisms/CardList";
import Layout from "../../components/organisms/Layout/Layout";

const bestItemData = [
  {
    title: "Nike",
    desc: "Nike Dunk Low Retro Black",
    price: "301,000",
    express_mark: true,
    text: "즉시 구매가",
    url: "/images/bestItem01.png",
  },
  {
    title: "Jordan",
    desc: "Jordan 1 Retro High OG Black Mocha",
    price: "665,000",
    express_mark: true,
    text: "즉시 구매가",
    url: "/images/bestItem02.png",
  },
];

export interface IMypageProps {
  buttons: Array<any>;
  data: Array<any>;
}
const Mypage: React.FC<IMypageProps> = () => {
  const buttons = [
    { text: "프로필 수정", url: "my/profile" },
    { text: "내 스타일", url: "my/style" },
  ];
  return (
    <Layout>
      <UserDetail userId="mida" userEmail="mida@naver.com" buttons={buttons} />
      <MembershipWrap>
        <MembershipBox>
          <Text fs="1.6rem" fw="bold">
            일반회원
          </Text>
          <Text margin="3px 0 0" fs="1.3rem" color="rgba(34,34,34,.5)">
            회원등급
          </Text>
        </MembershipBox>
        <MembershipBox>
          <Text fs="1.6rem" fw="bold">
            0P
          </Text>
          <Text margin="3px 0 0" fs="1.3rem" color="rgba(34,34,34,.5)">
            포인트
          </Text>
        </MembershipBox>
      </MembershipWrap>
      <RecentHistoryList />
      <ProductList title="관심 상품" data={bestItemData} />
      <SellerContainer>
        <Text fs="1.6rem" fw="bold">
          관심 셀러
        </Text>
        <Row
          justifyContent="space-between"
          alignItems="center"
          margin="16px 0 0 0"
        >
          <SellerBox>공지사항</SellerBox>
          <SellerBox>검수기준</SellerBox>
          <SellerBox>패널티 정책</SellerBox>
        </Row>
        <Row justifyContent="space-between" alignItems="center">
          <SellerBox>이용정책</SellerBox>
          <SellerBox>FAQ</SellerBox>
          <SellerBox>제휴문의</SellerBox>
        </Row>
      </SellerContainer>
    </Layout>
  );
};

export const MembershipWrap = styled.div`
  ${flexbox("between")}
  border-top: 10px solid #f4f4f4;
`;

export const MembershipBox = styled.div`
  width: 50%;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #f4f4f4;
`;

export const SellerContainer = styled.div`
  padding: 16px 16px 20px;
`;

export const SellerBox = styled.div`
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 1.2rem;
  text-align: center;
  border: 1px solid #eee;
`;

export default Mypage;

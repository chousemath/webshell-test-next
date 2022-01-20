import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import Layout from "../../components/organisms/Layout/Layout";
import { Text } from "../../components/atoms";
import { flexbox } from "../../styles/utils/flexbox";
import { NotiList } from "../../components/organisms/Noti";
const notiData = [
  {
    brandUrl: "/images/brand_chanel.png",
    content: "미니백 신상품 xxx가 입고되었습니다",
  },
  {
    brandUrl: "/images/brand_chanel.png",
    content: "찾고 계신 xxx가 입고되었습니다.",
  },
  {
    brandUrl: "/images/brand_chanel.png",
    content: "등록하신 xxx에 xxx가 관심을 표현했습니다.",
  },
  {
    brandUrl: "/images/brand_chanel.png",
    content: "xxx상점에 질문한 내용에 댓글이 달렸습니다.",
  },
];

const initialState = {
  all: false,
  message: false,
  deal: false,
  brand: false,
  seller: false,
};
const Noti: React.FC = () => {
  const [category, setCategory] = useState({ ...initialState, all: true });
  const changeFilter = useCallback(
    (name: string) => {
      if (name === "all") {
        setCategory({ ...initialState, all: true });
      } else if (name === "message") {
        setCategory({ ...initialState, message: true });
      } else if (name === "deal") {
        setCategory({ ...initialState, deal: true });
      } else if (name === "brand") {
        setCategory({ ...initialState, brand: true });
      } else {
        setCategory({ ...initialState, seller: true });
      }
    },
    [category]
  );

  return (
    <Layout>
      <Text padding="20px 0" fs="2rem" fw="700" textAlign="center">
        ALL NOTIFICATIONS
      </Text>
      <NotiCategoryWrap>
        <NotiItem
          className={category.all ? "show" : ""}
          onClick={() => changeFilter("all")}
        >
          All
        </NotiItem>
        <NotiItem
          className={category.message ? "show" : ""}
          onClick={() => changeFilter("message")}
        >
          Message
        </NotiItem>
        <NotiItem
          className={category.deal ? "show" : ""}
          onClick={() => changeFilter("deal")}
        >
          Deal
        </NotiItem>
        <NotiItem
          className={category.brand ? "show" : ""}
          onClick={() => changeFilter("brand")}
        >
          Brand
        </NotiItem>
        <NotiItem
          className={category.seller ? "show" : ""}
          onClick={() => changeFilter("seller")}
        >
          Seller
        </NotiItem>
      </NotiCategoryWrap>
      <NotiList data={notiData} />
    </Layout>
  );
};

export const NotiCategoryWrap = styled.ul`
  ${flexbox()};
  margin: 0 16px;
  text-align: center;
  border-radius: 8px;
  background-color: #f1f1f1;
`;

export const NotiItem = styled.li`
  flex: 1;
  padding: 10px 20px;
  font-size: 1.3rem;
  border-radius: 8px;
  border: 2px solid #f1f1f1;
  cursor: pointer;
  &.show {
    background-color: #fff;
  }
`;

export default Noti;

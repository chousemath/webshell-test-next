import styled from "@emotion/styled";
import Layout from "../../../../../components/organisms/Layout/Layout";
import { ITheme } from "../../../../../interfaces/ITheme";
import { SellButton } from "../../../../../components/molecules";
import { ISellButtonProps } from "../../../../../interfaces/IElements";
import { NextPage } from "next";
const Categories: NextPage = () => {
  const question: string = "판매하고자 하는 아이템의 카테고리를 골라주세요.";
  const mockingArr: Array<ISellButtonProps> = [
    {
      id: 1,
      children: "Bags",
      isRightBtn: true,
      innerDatas: [
        {
          id: 1,
          children: "Handbags",
        },
        {
          id: 2,
          children: "Clutch bags",
        },
        {
          id: 3,
          children: "Backpacks",
        },
        {
          id: 4,
          children: "Travel bags",
        },
      ],
    },
    {
      id: 2,
      children: "Shoes",
      isRightBtn: true,
      innerDatas: [
        {
          id: 5,
          children: "Boots",
        },
        {
          id: 6,
          children: "Trainers",
        },
        {
          id: 7,
          children: "Flats",
        },
        {
          id: 8,
          children: "Ballet flats",
        },
      ],
    },
    {
      id: 3,
      children: "Clothing",
      isRightBtn: true,
      innerDatas: [
        {
          id: 9,
          children: "Tops",
        },
        {
          id: 10,
          children: "Knitwear",
        },
        {
          id: 11,
          children: "Dresses",
        },
        {
          id: 12,
          children: "Skirts",
        },
      ],
    },
    {
      id: 4,
      children: "Accessories",
      isRightBtn: true,
      innerDatas: [
        {
          id: 13,
          children: "Sunglasses",
        },
        {
          id: 14,
          children: "Wallets",
        },
        {
          id: 15,
          children: "Belts",
        },
        {
          id: 16,
          children: "Hats",
        },
      ],
    },
  ];
  return (
    <Layout header="sell">
      <QuestionBox>
        <span>{question}</span>
      </QuestionBox>
      {mockingArr.map((data, index) => {
        return (
          <SellButton key={`${data.children}-${index}-${data.id}`} {...data} />
        );
      })}
    </Layout>
  );
};

const QuestionBox = styled.div<ITheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 0 24%;
  background-color: ${({ theme }) => theme.colors.liteGray};
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  & > span {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default Categories;

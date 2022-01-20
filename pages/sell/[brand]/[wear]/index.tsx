import Layout from "../../../../components/organisms/Layout/Layout";
import { SellButton } from "../../../../components/molecules";
import styled from "@emotion/styled";
import { ITheme } from "../../../../interfaces/ITheme";
import { ISellButtonProps } from "../../../../interfaces/IElements";
import Link from "next/link";
import { getCurrentHref } from "../../../../utils/sell";
import { NextPage } from "next";

const Wear: NextPage = () => {
  const question: string = "판매하고자 하는 아이템의 카테고리를 골라주세요.";

  const mockingArr: Array<ISellButtonProps> = [
    {
      id: 1,
      children: "WomensWear",
      isLeftBtn: false,
      isRightBtn: false,
    },
    {
      id: 2,
      children: "MensWear",
      isLeftBtn: false,
      isRightBtn: false,
    },
    {
      id: 3,
      children: "Girlswear",
      isLeftBtn: false,
      isRightBtn: false,
    },
    {
      id: 4,
      children: "Boyswear",
      isLeftBtn: false,
      isRightBtn: false,
    },
  ];

  const currentHref: string = getCurrentHref();

  return (
    <Layout header="sell">
      <QuestionBox>
        <span>{question}</span>
      </QuestionBox>
      {mockingArr.map((data) => {
        return (
          <Link
            href={`${currentHref}/${data.children}/category`}
            key={`${data.children}-${data.id}`}
          >
            <a>
              <SellButton {...data} />
            </a>
          </Link>
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

export default Wear;

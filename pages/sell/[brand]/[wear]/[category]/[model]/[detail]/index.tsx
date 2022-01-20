import styled from "@emotion/styled";
import { ITheme } from "../../../../../../../interfaces/ITheme";
import Layout from "../../../../../../../components/organisms/Layout/Layout";
import { SellButton } from "../../../../../../../components/molecules";
import { useRouter } from "next/router";
import {
  ISellButtonProps,
  ISellInnerProps,
} from "../../../../../../../interfaces/IElements";
import { NextPage } from "next";

const Detail: NextPage = () => {
  const router = useRouter();

  const reduceWordShortly = (word?: string): string => {
    if (!word) return "";
    if (word.startsWith("Women")) {
      return "Women's";
    }
    if (word.startsWith("Men")) {
      return "Men's";
    }
    if (word.startsWith("Boy")) {
      return "Boy's";
    }
    return "Girl's";
  };

  const changeWordPretty = (word?: string): string | undefined => {
    if (!word) return "";
    // 소문자로 만들기
    let newWord = word.toLowerCase();
    // 앞글자 대문자로
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    return newWord;
  };

  const changeQuestion = (): string | undefined => {
    const { brand, wear, category }: any = router.query;
    const newQuestion: string | undefined = `${changeWordPretty(
      brand
    )} ${reduceWordShortly(wear)} ${changeWordPretty(category)}`;
    return newQuestion;
  };

  const question: string = `${changeQuestion()}`;
  const mockingInnerDatas: Array<ISellInnerProps> = [
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
  ];
  const mockingArr: Array<ISellButtonProps> = [
    {
      id: 1,
      children: "Information",
      isRightBtn: true,
      innerDatas: mockingInnerDatas,
    },
    {
      id: 2,
      children: "Photos",
      isRightBtn: true,
    },
    {
      id: 3,
      children: "Description",
      isRightBtn: true,
    },
    {
      id: 4,
      children: "Seller",
      isRightBtn: true,
    },
    {
      id: 5,
      children: "Conditions & Price",
      isRightBtn: true,
    },
  ];

  return (
    <Layout header="sell" headerTitle="상세 정보 입력">
      <QuestionBox>
        <span>{question}</span>
      </QuestionBox>
      {mockingArr.map((data, index) => {
        return <SellButton key={`${data}-${index}-${data.id}`} {...data} />;
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

export default Detail;

import Layout from "../../../components/organisms/Layout/Layout";
import {
  SellAlphabetLabel,
  SellSearchInput,
} from "../../../components/molecules";
import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import { useState } from "react";
import Link from "next/link";

import { IBrandData } from "../../../interfaces/IElements";
const brandMockingData: Array<IBrandData> = [
  {
    brandName: "A Bathing Ape",
  },
  {
    brandName: "A Better Feeling",
  },
  {
    brandName: "A Better Mistake",
  },
  {
    brandName: "A Bronze Age",
  },
  {
    brandName: "A Child Of The Jago",
  },
  {
    brandName: "A Cuckoo Moment...",
  },
  {
    brandName: "A DAY'S MARCH",
  },
  {
    brandName: "A Detacher",
  },
  {
    brandName: "A kind of guise",
  },
  {
    brandName: "A PART OF THE ART",
  },
  {
    brandName: "A Piece Of Chic",
  },
  {
    brandName: "A-Cold-Wall",
  },
  {
    brandName: "A-Esque",
  },
  {
    brandName: "A-Esque",
  },
  {
    brandName: "A-Esque",
  },
  {
    brandName: "A Bathing Ape",
  },
  {
    brandName: "A Better Feeling",
  },
  {
    brandName: "A Better Mistake",
  },
  {
    brandName: "A Bronze Age",
  },
  {
    brandName: "A Child Of The Jago",
  },
  {
    brandName: "A Cuckoo Moment...",
  },
  {
    brandName: "A DAY'S MARCH",
  },
  {
    brandName: "A Detacher",
  },
  {
    brandName: "A kind of guise",
  },
  {
    brandName: "A PART OF THE ART",
  },
  {
    brandName: "A Piece Of Chic",
  },
];

const SelectThird: React.FC = () => {
  const question: string = "아이템의 브랜드는 무엇인가요?";
  const [search, setSearch] = useState("");
  const onChange = (e: any): void => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Layout header="sell">
      <QuestionBox>
        <span>{question}</span>
      </QuestionBox>
      <SellSearchInput _onChange={onChange} search={search} />
      {search === "" ? (
        <>
          <SellAlphabetLabel alphabet="A" />
          {brandMockingData.map((data, index) => {
            return (
              <BrandNameBox key={`${data}-${index}`}>
                <span>{data.brandName}</span>
              </BrandNameBox>
            );
          })}
        </>
      ) : (
        <ButtonBox>
          <Link href="/sell/select_fourth" passHref>
            <button>NEXT</button>
          </Link>
        </ButtonBox>
      )}
    </Layout>
  );
};

const ButtonBox = styled.div<ITheme>`
  padding: 0 60px;
  margin-bottom: 20px;
  & > button {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background-color: black;
    height: 50px;
    color: #fff;
  }
`;

const BrandNameBox = styled.div<ITheme>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.liteGray};
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  & > span {
    font-size: 1.5rem;
  }
`;

const QuestionBox = styled.div<ITheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 0 24%;
  background-color: rgb(250, 250, 250);
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  & > span {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default SelectThird;

import { useState } from "react";
import styled from "@emotion/styled";
import { ITheme } from "../../../../../../interfaces/ITheme";

import Link from "next/link";
import Image, { ImageProps } from "next/image";

import Layout from "../../../../../../components/organisms/Layout/Layout";

import { SellSearchInput } from "../../../../../../components/molecules";
import { getCurrentHref } from "../../../../../../utils/sell";
import { NextPage } from "next";

const Model: NextPage = () => {
  const question: string = "아이템의 모델명은 무엇인가요?";
  const [search, setSearch] = useState("");

  const onChange = (e: any): void => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const currentHref = getCurrentHref();
  const imageMockingStyle: ImageProps = {
    src: "/images/brand_shanel.png",
    layout: "responsive",
    alt: "sample-image",
    width: "100%",
    height: "100%",
    priority: true,
  };
  const arrForMap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <Layout header="sell">
      <QuestionBox>
        <span>{question}</span>
      </QuestionBox>
      <SellSearchInput _onChange={onChange} search={search} />
      {search === "" ? (
        <ImageContainer>
          {arrForMap.map((value, index) => {
            return (
              <ImageBox key={`${value}-${index}`}>
                <Image {...imageMockingStyle} alt="sample-image" />
                <TextBox>Cambon</TextBox>
              </ImageBox>
            );
          })}
        </ImageContainer>
      ) : (
        <Link href={`${currentHref}/modles/details`}>
          <a>
            <ButtonBox>
              <button>NEXT</button>
            </ButtonBox>
          </a>
        </Link>
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

const ImageContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImageBox = styled.div`
  width: 33.33%;
  height: 33.33%;
  position: relative;
  margin-bottom: 15px;
`;

const TextBox = styled.span`
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  text-align: center;
`;

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
export default Model;

import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../../components/organisms/Layout/Layout";
import styled from "@emotion/styled";
import { ITheme } from "../../interfaces/ITheme";
import Link from "next/link";

const Sell: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Title>SELL WITH PAP!</Title>
          <SubTitle>
            PAP을 통해 판매하시면 a, b, c등의 다양한 혜택이 있습니다!
          </SubTitle>
          <ImageBox>
            <Image
              src="/images/brand_shanel.png"
              layout="responsive"
              alt="sample-image"
              width="60px"
              height="60px"
              priority
            />
          </ImageBox>
          <Link href="/sell/brand" passHref>
            <a>
              <ButtonBox>
                <button>+ Sell an Item</button>
              </ButtonBox>
            </a>
          </Link>
          <TextBox>
            <button onClick={() => alert("빈티지 상점 등록 문의")}>
              빈티지 상점 등록 문의
            </button>
          </TextBox>
        </Wrapper>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 67px);
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1<ITheme>`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: 0 16px;
  margin-bottom: 20px;
`;

const SubTitle = styled.p<ITheme>`
  text-align: center;
  padding: 0 27%;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 20px;
`;

const ImageBox = styled.div`
  padding: 0 100px;
  margin-bottom: 20px;
`;

const ButtonBox = styled.div<ITheme>`
  padding: 0 60px;
  margin-bottom: 20px;
  & > button {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background-color: black;
    height: 40px;
    color: #fff;
  }
`;

const TextBox = styled.div<ITheme>`
  padding: 0 32%;
  & > button {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    height: 30px;
    color: #000;
    border-bottom: 2px solid #000;
  }
`;

export default Sell;

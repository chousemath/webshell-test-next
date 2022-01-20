import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import Layout from "../../../components/organisms/Layout/Layout";
import { SellBrandImage } from "../../../components/molecules";
import Link from "next/link";
import { NextPage } from "next";

interface IBrandImageDummy {
  id: number;
  brandName: string;
  brandImage: string;
}
const Brand: NextPage = () => {
  const question: string = "판매하고자 하는 브랜드가 무엇인가요?";

  const BrandImageDummy: Array<IBrandImageDummy> = [
    {
      id: 1,
      brandName: "CHANEL",
      brandImage: "/images/brandImage01.png",
    },
    {
      id: 2,
      brandName: "HERMES",
      brandImage: "/images/brandImage01.png",
    },
    {
      id: 3,
      brandName: "DIOR",
      brandImage: "/images/brandImage01.png",
    },
    {
      id: 4,
      brandName: "LOUIS VUITTON",
      brandImage: "/images/brandImage01.png",
    },
  ];

  return (
    <Layout header="sell">
      <QuestionBox>
        <span>{question}</span>
      </QuestionBox>
      {BrandImageDummy.map((value) => {
        return (
          <Link href={`/sell/${value.brandName}/wear`} key={`${value.id}`}>
            <a>
              <SellBrandImage
                brandName={value.brandName}
                brandImage={value.brandImage}
              />
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
export default Brand;

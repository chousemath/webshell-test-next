import Layout from "../../components/organisms/Layout/Layout";
import { NextPage } from "next";
import {
  FilterCategory,
  ProductCategory,
} from "../../components/organisms/Category";
import styled from "@emotion/styled";

const quickData = [
  { title: "럭셔리" },
  { title: "스니커즈" },
  { title: "의류" },
  { title: "패션잡화" },
  { title: "라이프" },
  { title: "테크" },
];
const brandData = [
  { brand: "Jordan 1" },
  { brand: "ROLEX" },
  { brand: "SHANEL" },
  { brand: "머플러" },
  { brand: "몽클레르" },
  { brand: "Dunk" },
  { brand: "Jordan 1" },
  { brand: "ROLEX" },
];

const Search: NextPage = () => {
  return (
    <Layout header={"search"}>
      <FilterCategory data={quickData} />
      <ProductCategory data={brandData} />
    </Layout>
  );
};

export default Search;

const CategoryList = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;
`;

const BrandList = styled.div`
  width: 100%;
  height: 50px;
  background-color: royalblue;
`;

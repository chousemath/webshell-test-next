import Layout from "../../components/organisms/Layout/Layout";
import { NextPage } from "next";
import { BrandCardList } from "../../components/organisms/CardList/BrandCardList";
import { PopularSearch } from "../../components/organisms/Search/PopularSearch";
import { ProductCategoryList } from "../../components/organisms/Search/ProductCategoryList";
import { Container, Text } from "../../components/atoms";

const Search: NextPage = () => {
  const popularList: Array<any> = [
    [
      "샤넬 화이트 클래식",
      "샤넬 쁘디삭",
      "디올 레이디",
      "샤넬 점보",
      "샤넬 미니 초고",
    ],
    [
      "루이비똥 클래식",
      "루이비똥 레이디",
      "디올 점보",
      "샤넬 제니",
      "샤넬 지디",
    ],
  ];

  const categoryList: string[] = [
    "신상품",
    "의류",
    "엑티브웨어",
    "슈즈",
    "백",
    "악세서리",
    "언데웨어 & 양말",
    "주얼리",
    "시계",
    "라이프스타일",
  ];
  return (
    <>
      <Layout header={"search"}>
        {/* 브랜드 */}
        <Container padding={"0 10px"} margin="0 0 46px 0">
          <Text padding={"10px"} margin={"0 0 8px 0"} fs={"1.6rem"} fw={"bold"}>
            브랜드
          </Text>
          <BrandCardList />
        </Container>
        {/* 인기 검색어 */}
        <Container padding={"0 10px"}>
          <Text padding={"10px"} margin={"0 0 8px 0"} fs={"1.6rem"} fw={"bold"}>
            인기 검색어
          </Text>
          <PopularSearch items={popularList} />
        </Container>
        {/* 카테고리 */}
        <Container padding={"25px 10px"}>
          <Text padding={"10px"} margin={"0 0 8px 0"} fs={"1.6rem"} fw={"bold"}>
            카테고리
          </Text>
          <ProductCategoryList items={categoryList} />
        </Container>
      </Layout>
    </>
  );
};

export default Search;

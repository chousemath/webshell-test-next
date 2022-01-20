import type { NextPage } from "next";
import Layout from "../../components/organisms/Layout/Layout";
import { HashTagList } from "../../components/organisms/Category";
import { StyleCardList } from "../../components/organisms/CardList";
import styled from "@emotion/styled";
const hashTags: string[] = [
  "# 데일리룩",
  "# 일상",
  "# 스타일",
  "# 착샷",
  "# 신상",
  "# 데일리룩",
  "# 일상",
  "# 스타일",
  "# 착샷",
];
const styleCardList: number[] = [1, 2, 3, 4, 5, 6, 7];

const Style: NextPage = () => {
  return (
    <Layout header={"order"}>
      <InnerContainer>
        <HashTagList items={hashTags} /> {/* 해시태그 리스트*/}
        <StyleCardList items={styleCardList} /> {/* 스타일 카드 리스트 */}
      </InnerContainer>
    </Layout>
  );
};
const InnerContainer = styled.div`
  padding-top: 50px;
`;
export default Style;

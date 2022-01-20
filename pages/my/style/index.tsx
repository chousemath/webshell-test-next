import React from "react";
import styled from "@emotion/styled";
import { flexbox } from "../../../styles/utils/flexbox";
import { Text } from "../../../components/atoms";
import { StyleCardList } from "../../../components/organisms/CardList";
import { ServiceCenter } from "../../../components/organisms/Footer/ServiceCenter";
import { SnsFooter } from "../../../components/organisms/Footer/SnsFooter";
import { FooterContainer } from "../../../components/organisms/Footer/style";
import Layout from "../../../components/organisms/Layout/Layout";
import { UserDetail } from "../../../components/organisms/User";

const styleCardList: number[] = [1, 2, 3, 4, 5, 6, 7];
const MyStyle: React.FC = () => {
  return (
    <Layout>
      <UserDetail
        userName="Kream_dev"
        userId="mida"
        message="프로필 정보는 앱에서 수정해주세요"
      />
      <SocialContainer>
        <SocialBox>
          <Text fs="1.5rem" fw="bold">
            1
          </Text>
          <Text>게시물</Text>
        </SocialBox>
        <SocialBox>
          <Text fs="1.5rem" fw="bold">
            0
          </Text>
          <Text>팔로워</Text>
        </SocialBox>
        <SocialBox>
          <Text fs="1.5rem" fw="bold">
            0
          </Text>
          <Text>팔로잉</Text>
        </SocialBox>
      </SocialContainer>
      <div>
        <StyleCardList items={styleCardList} />
      </div>
      <FooterContainer>
        <ServiceCenter />
        <SnsFooter />
      </FooterContainer>
    </Layout>
  );
};

const SocialContainer = styled.ul`
  ${flexbox()};
  border-top: 10px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
`;

const SocialBox = styled.li`
  flex: 1;
  padding: 12px 0;
  text-align: center;
`;

export default MyStyle;

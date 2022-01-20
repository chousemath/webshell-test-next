import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import { Container, Row, Img, Text } from "../../../atoms";

interface SocialCardProps {
  _onClick?: () => void;
}

const ImageStyle = css`
  border-radius: 6px;
`;

export const SocialCard: React.FC<SocialCardProps> = ({ _onClick }) => {
  return (
    <SocialContainer onClick={_onClick}>
      <Container>
        <Image
          src={"/images/userImg01.jpeg"}
          alt={"이미지"}
          layout="responsive"
          width={"100%"}
          height={"100%"}
          css={ImageStyle}
        />
      </Container>
      <SocialInfoContainer>
        {/* 유저 정보 */}
        <Row justifyContent="flex-start" alignItems="center">
          <Img
            className={"user-img"}
            src={"/images/userImg01.jpeg"}
            alt={"이미지"}
            size={"25px"}
          />
          <Text fs={"1.2rem"} padding={"0 0 0 4px"}>
            kikikizzz
          </Text>
        </Row>
        <Text fs={"1.3rem"} padding={"10px 0"}>
          청량 자체 #옵시디언 #조던1 조던하이 #조던하이1 #KREAM스타일
        </Text>
        {/* 좋아요 및 댓글 */}
        <Row>
          <Row margin="0 15px 0 0">
            <div>좋아요</div>
            <div>28</div>
          </Row>
          <Row>
            <div>댓글</div>
            <div>10</div>
          </Row>
        </Row>
      </SocialInfoContainer>
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  width: 50%;
  &:nth-of-type(odd) {
    padding-right: 4px;
  }
  &:nth-of-type(even) {
    padding-left: 4px;
  }
`;
/* SocialCard */
const SocialInfoContainer = styled.div`
  width: 100%;
  padding: 8px 4px 20px;
`;

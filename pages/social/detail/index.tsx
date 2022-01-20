import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import Layout from "../../../components/organisms/Layout/Layout";
import { Container } from "../../../components/atoms";
import { SocialUserCard } from "../../../components/molecules/Card/Social/SocialUserCard";

const socialDetail: React.FC = () => {
  return (
    <Layout header={"order"}>
      <Container margin="50px 0 0 0">
        <SocialUserCard />
        <ImageContainer>
          <Image
            src={
              "https://kream-phinf.pstatic.net/MjAyMjAxMTVfMTkw/MDAxNjQyMjUwNzc4NDI3.tTeffoTX7z-VXtfSLiT8JlW0BxXhABtHnNrp21h6XdQg.Qs3jiVhEZxkd3tCo-hq2p5EhgUSDlNMhmzWvJh-i2hUg.JPEG/p_51207fbe83fd44008b66a48e43f1a4aa.jpeg?type=l"
            }
            alt={"이미지"}
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </ImageContainer>
      </Container>
    </Layout>
  );
};

export default socialDetail;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
`;

import React from "react";
import styled from "@emotion/styled";
// import Image from "next/image";

interface BannerProps {
  url?: string;
  alt?: string;
  height?: string;
}

export const BannerImage: React.FC<BannerProps> = ({
  url = "",
  alt = "",
  height = "auto",
}) => {
  return (
    <BannerContainer height={height}>
      <ImageBox>PAP 100% 검수 시스템</ImageBox>
      {/* 배너 이미지 나오면 아래 주석 부분으로 변경할 예정
      <Image
        src={url}
        alt={alt}
        width={"100%"}
        height={"100%"}
        layout="responsive"
      /> */}
    </BannerContainer>
  );
};

const BannerContainer = styled.div<BannerProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : "auto")};
  max-height: 180px;
  cursor: pointer;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 120px;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  line-height: 120px;
  color: #fff;
  background-color: #f55637;
`;

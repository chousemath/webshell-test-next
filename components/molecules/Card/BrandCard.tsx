import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

interface brandCardProps {
  width?: string;
  height?: string;
  src: string;
  alt: string;
}

export const BrandCard: React.FC<brandCardProps> = ({ src, alt }) => {
  return (
    <>
      <BrandContainer>
        <BrandImgContainer>
          <Image src={src} alt={alt} layout="fill" priority />
        </BrandImgContainer>
      </BrandContainer>
    </>
  );
};

const BrandContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 12px 20px 0px rgb(0 0 0/ 8%);
`;

const BrandImgContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

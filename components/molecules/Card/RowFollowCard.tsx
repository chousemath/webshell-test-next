import React, { useState } from "react";
import Image from "next/image";
import { Row, Column, Img } from "../../atoms";
import { FollowButton } from "./style";
import styled from "@emotion/styled";

interface RowFollowCardProps {
  type?: string;
  height?: string;
  size?: string;
  src?: string;
}

export const RowFollowCard: React.FC<RowFollowCardProps> = ({
  type,
  children,
  height,
  size,
  src,
}) => {
  const [onFollow, setOnFollow] = useState(false);

  const handleFollow = () => {
    onFollow ? setOnFollow(false) : setOnFollow(true);
  };
  return (
    <Row
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"8px 24px"}
      height={height}
    >
      <Row justifyContent="flex-start">
        <ImageContainer className={`${type}-image`}>
          <Image
            src="/images/newItem01.jpeg"
            alt="하하하"
            width={size}
            height={size}
          />
        </ImageContainer>
        {/* <Img
          src="/images/newItem01.jpeg"
          alt="하하하"
          size={size}
          className={"user-img"}
        /> */}
        {children}
      </Row>
      <Column className={"center"} height={"100%"}>
        <FollowButton className={onFollow ? "on" : ""} onClick={handleFollow}>
          팔로우
        </FollowButton>
      </Column>
    </Row>
  );
};

RowFollowCard.defaultProps = {
  height: "65px",
  size: "60px",
};

const ImageContainer = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    border-radius: 50%;
  }

  &.social-image {
    width: 34px;
    height: 34px;
  }
`;

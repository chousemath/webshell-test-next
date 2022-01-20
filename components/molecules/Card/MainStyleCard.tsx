import React from "react";
import { IStyleCard } from "../../../interfaces/ICard";
import { ImgContainer, UserProfileWrap, UserNameWrap } from "./style";
import Image from "next/image";
import { Text } from "../../atoms";

export const MainStyleCard: React.FC<IStyleCard> = ({
  className,
  url,
  profileUrl,
  userName,
}) => {
  return (
    <ImgContainer className={className}>
      <UserProfileWrap>
        <Image src={profileUrl} alt={userName} layout="fill" />
      </UserProfileWrap>
      <Image src={url} alt={userName} layout="fill" />
      <UserNameWrap>
        <Text fs="1.3rem" color="#fff">
          {userName}
        </Text>
      </UserNameWrap>
    </ImgContainer>
  );
};

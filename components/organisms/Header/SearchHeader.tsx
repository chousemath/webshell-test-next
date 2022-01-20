import React, { useState } from "react";
import {
  HeaderContainer,
  SearchContainer,
  SearchInputContainer,
  IconContainer,
} from "./style";
import Image from "next/image";

interface SearchHeaderProps {}

export const SearchHeader: React.FC<SearchHeaderProps> = ({}) => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <IconContainer>
          <Image
            src={"/images/icon/icon-search.svg"}
            width={25}
            height={25}
            alt={"search"}
          />
        </IconContainer>
        <SearchInputContainer>
          <input placeholder={"브랜드명, 모델명, 모델번호 등 "} />
        </SearchInputContainer>
      </SearchContainer>
    </HeaderContainer>
  );
};

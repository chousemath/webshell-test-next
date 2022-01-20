import React from "react";
import { IProducTitle } from "../../../interfaces/ICard";
import { TitleContainer, Title, SubTitle } from "./style";

export const ProductTitle: React.FC<IProducTitle> = ({ title, subTitle }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </TitleContainer>
  );
};

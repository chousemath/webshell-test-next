import React from "react";
import { IProductCard } from "../../../interfaces/ICard";
import { Text } from "../../atoms";
import {
  ItemTitleContainer,
  ItemTitle,
  Desc,
  ExpressMark,
  Price,
  InterestContainer,
  InterestBox,
} from "./style";

export const ProductInfo: React.FC<IProductCard> = ({
  title,
  desc,
  price,
  text,
  express_mark,
  interest,
  className,
}) => {
  return (
    <ItemTitleContainer className={className}>
      <ItemTitle>{title}</ItemTitle>
      <Desc>{desc}</Desc>
      {!className && express_mark && <ExpressMark>빠른배송</ExpressMark>}
      <Price>{price}</Price>
      <Text color="#dedede">{text}</Text>
      {className && express_mark && <ExpressMark>빠른배송</ExpressMark>}
      {interest && (
        <InterestContainer>
          <InterestBox>5.4만</InterestBox>
          <InterestBox>7,961</InterestBox>
        </InterestContainer>
      )}
    </ItemTitleContainer>
  );
};

import React from "react";
import { StyleContainer, Container, CardContainer, CardGrid } from "./style";
import { ProductTitle } from "../../molecules/Card/ProductTitle";
import { MainStyleCard } from "../../molecules/Card/MainStyleCard";
import { IProductCard } from "../../../interfaces/ICard";

export const MainStyleCardList: React.FC<IProductCard> = ({ data, title }) => {
  return (
    <StyleContainer>
      <ProductTitle title={title} />
      <Container>
        <CardContainer>
          {data.map((card: any, index: number) => {
            return (
              <CardGrid key={index} className="styleCatdGrid">
                <MainStyleCard
                  url={card.url}
                  userName={card.userName}
                  profileUrl={card.profileUrl}
                />
              </CardGrid>
            );
          })}
        </CardContainer>
      </Container>
    </StyleContainer>
  );
};

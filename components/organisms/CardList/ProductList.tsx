import React from "react";
import Link from "next/link";
import { IProductCard } from "../../../interfaces/ICard";
import {
  ProductContainer,
  Container,
  CardContainer,
  CardGrid,
  CardMoreWrap,
} from "./style";
import { ProductTitle, ProductCard, ProductInfo } from "../../molecules/Card";
import { Button } from "../../atoms";

export const ProductList: React.FC<IProductCard> = ({
  data,
  title = "",
  // subTitle,
}) => {
  return (
    <ProductContainer>
      {/* title 유무 */}
      {title && <ProductTitle title={title} />}
      <Container>
        <CardContainer>
          {data.map((card: any, index: number) => {
            return (
              <CardGrid key={index}>
                <Link
                  href={`/products/${card.productId ? card.productId : "13"}`}
                >
                  <a>
                    <ProductCard
                      url={card.url}
                      title={card.title}
                      desc={card.desc}
                      price={card.price}
                      express_mark={card.express_mark}
                      text={card.text}
                    />
                  </a>
                </Link>
                <ProductInfo
                  desc={card.desc}
                  // title={card.title}
                  // price={card.price}
                  // express_mark={card.express_mark}
                  // text={card.text}
                />
              </CardGrid>
            );
          })}
        </CardContainer>
        <CardMoreWrap>
          <Button fw="400">더보기</Button>
        </CardMoreWrap>
      </Container>
    </ProductContainer>
  );
};

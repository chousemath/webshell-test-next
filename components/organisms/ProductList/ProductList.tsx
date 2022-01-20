import React from "react";
import { IProductCard } from "../../../interfaces/ICard";
import {
  ListContainer,
  ProductContent,
  SearchContainer,
  SearchOption,
  ListCardContainer,
  ListCardGrid,
} from "./style";
import { ProductCard, ProductInfo } from "../../../components/molecules/Card";
import { FilterCategory, ProductCategory } from "../Category";
const quickData = [
  { title: "럭셔리" },
  { title: "스니커즈" },
  { title: "의류" },
  { title: "패션잡화" },
  { title: "라이프" },
  { title: "테크" },
];
const brandData = [
  { brand: "Jordan 1" },
  { brand: "ROLEX" },
  { brand: "SHANEL" },
  { brand: "머플러" },
  { brand: "몽클레르" },
  { brand: "Dunk" },
  { brand: "Jordan 1" },
  { brand: "ROLEX" },
];
const newItemData = [
  {
    title: "Needles",
    desc: "Needles x END. Mohair Cardigan Papillon",
    price: "850,000",
    text: "즉시 구매가",
    url: "/images/newItem01.jpeg",
  },
  {
    title: "Bearbrick",
    desc: "Bearbrick x Atmos x Sean Wotherspoon 100％ & 400％ Set",
    price: "309,000",
    text: "즉시 구매가",
    url: "/images/newItem02.png",
  },
  {
    title: "Supreme",
    desc: "Supreme Velvet Pattern Trooper Black - 21FW",
    price: "169,000",
    text: "즉시 구매가",
    url: "/images/newItem03.png",
  },
];
const bestItemData = [
  {
    title: "Nike",
    desc: "Nike Dunk Low Retro Black",
    price: "301,000",
    express_mark: true,
    text: "즉시 구매가",
    url: "/images/bestItem01.png",
  },
  {
    title: "Jordan",
    desc: "Jordan 1 Retro High OG Black Mocha",
    price: "665,000",
    express_mark: true,
    text: "즉시 구매가",
    url: "/images/bestItem02.png",
  },
  {
    title: "Nike",
    desc: "Nike Dunk Low Retro Black",
    price: "301,000",
    express_mark: true,
    text: "즉시 구매가",
    url: "/images/bestItem01.png",
  },
];
export const ProductList: React.FC<IProductCard> = () => {
  return (
    <ListContainer>
      <FilterCategory data={quickData} />
      <ProductCategory data={brandData} />
      <ProductContent>
        <SearchContainer>
          <SearchOption>빠른배송</SearchOption>
          <SearchOption>인기순</SearchOption>
        </SearchContainer>
        <ListCardContainer>
          {bestItemData.map((card: any, index: number) => {
            return (
              <ListCardGrid key={index}>
                <ProductCard
                  className="listCardImg"
                  url={card.url}
                  title={card.title}
                  desc={card.desc}
                  price={card.price}
                  express_mark={card.express_mark}
                  text={card.text}
                />
                <ProductInfo
                  className="productListInfo"
                  title={card.title}
                  desc={card.desc}
                  price={card.price}
                  express_mark={card.express_mark}
                  text={card.text}
                  interest
                />
              </ListCardGrid>
            );
          })}
        </ListCardContainer>
      </ProductContent>
    </ListContainer>
  );
};

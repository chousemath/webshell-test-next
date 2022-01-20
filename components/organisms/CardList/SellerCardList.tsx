import React from "react";
import { SellerCard } from "../../molecules/Card";
import { ProductList } from "./ProductList";

export const SellerCardList: React.FC = () => {
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
  ];

  return (
    <>
      <SellerCard />
      <ProductList data={newItemData} />
    </>
  );
};

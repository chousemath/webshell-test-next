import React from "react";
import { AppContainer } from "../../components/atoms";
import Layout from "../../components/organisms/Layout/Layout";
import { BannerImage } from "../../components/molecules/Banner";
import { ProductList } from "../../components/organisms/CardList";
import { MainFooter } from "../../components/organisms/Footer";
import { SwiperLB } from "../../components/molecules/Swiper";
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
    text: "즉시 구매가",
    url: "/images/bestItem01.png",
  },
  {
    title: "Jordan",
    desc: "Jordan 1 Retro High OG Black Mocha",
    price: "665,000",
    text: "즉시 구매가",
    url: "/images/bestItem02.png",
  },
];

interface MainProps {
  data: any;
  src: string;
  title: string;
  subTitle: string;
  url: string;
}
const Home: React.FC<MainProps> = () => {
  return (
    <Layout>
      <SwiperLB />
      <ProductList title="NEW ARRIVALS" data={newItemData} />
      <BannerImage url="/images/banner01.png" />
      <ProductList title="MOST POPULAR" data={bestItemData} />
      <BannerImage url="/images/banner02.png" />
      <ProductList title="CHANEL" data={newItemData} />
      <MainFooter />
    </Layout>
  );
};

export default Home;

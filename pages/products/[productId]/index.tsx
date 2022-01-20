import { css } from "@emotion/react";

import { Container } from "../../../components/atoms";
import { SwiperLB } from "../../../components/molecules/Swiper";

import {
  ProductDetailInfo,
  ProductDetailSellerInfo,
} from "../../../components/organisms/ProductDetail";
import Layout from "../../../components/organisms/Layout/Layout";
import {
  IProductDetailInfoData,
  IProductDetailSellerData,
} from "../../../interfaces/IElements";
import { IProductCard } from "../../../interfaces/ICard";
import { ProductList } from "../../../components/organisms/CardList";

const containerStyle = css`
  padding: 16px;
`;

const Product: React.FC = () => {
  const newItemData: Array<IProductCard> = [
    {
      title: "Needles",
      desc: "Needles x END. Mohair Cardigan Papillon",
      price: "850,000",
      text: "즉시 구매가",
      url: "/images/newItem01.jpeg",
      express_mark: true,
    },
    {
      title: "Bearbrick",
      desc: "Bearbrick x Atmos x Sean Wotherspoon 100％ & 400％ Set",
      price: "309,000",
      text: "즉시 구매가",
      url: "/images/newItem02.png",
      express_mark: true,
    },
  ];

  const productDetailInfoData: IProductDetailInfoData = {
    productId: 20419,
    brand: "CHANEL",
    modelNameEN: "Chanel Small Vanity With Chain Lambskin & Gold Black",
    modelNameKR: "샤넬 스몰 체인 코스메틱 케이스 그레인드 카프스킨 & 골드 블랙",
    sellerDesc: "박스도 뜯지 않은 새상품 입니다. 영수증 택 모두 있어요",
    price: "2,140,000",
  };

  const productDetailSellerData: IProductDetailSellerData = {
    userId: 1213,
    userName: "코코샤넬",
    userScore: 3,
    userImage: "/images/userProfile02.jpeg",
  };
  return (
    <Layout>
      <SwiperLB />
      <Container css={containerStyle}>
        <ProductDetailInfo {...productDetailInfoData} />
        <ProductDetailSellerInfo {...productDetailSellerData} />
      </Container>
      <ProductList title="판매자의 다른상품" data={newItemData} />
      <ProductList title="같은 브랜드 상품" data={newItemData} />
    </Layout>
  );
};

export default Product;

import type { NextPage } from "next";
import { SellerCardList } from "../../components/organisms/CardList";
import Layout from "../../components/organisms/Layout/Layout";

const Seller: NextPage = () => {
  const SellerList: number[] = [1, 2, 3, 4];
  return (
    <Layout header={"search"}>
      {SellerList.map((_value, idx) => (
        <SellerCardList key={`seller-${idx}`} />
      ))}
    </Layout>
  );
};

export default Seller;

import React from "react";
import { OrderCategory } from "../Category";

const orderItems: string[] = ["인기", "최신", "팔로잉"];

export const OrderHeader: React.FC = () => {
  return (
    <>
      <OrderCategory items={orderItems} /> {/* 정렬 카테고리 */}
    </>
  );
};

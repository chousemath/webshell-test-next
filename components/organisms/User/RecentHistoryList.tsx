import React from "react";
import { RecentHistory } from "../../molecules/User";

export const RecentHistoryList: React.FC = () => {
  // 추후 데이터 받으면 여기서 넘길 예정
  return (
    <>
      <RecentHistory title="구매내역" />
      <RecentHistory title="판매내역" />
    </>
  );
};

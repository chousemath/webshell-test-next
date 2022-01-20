import React from "react";
import { Column, Text } from "../../../atoms";
import { RowFollowCard } from "../RowFollowCard";

export const SellerCard: React.FC = () => {
  return (
    <RowFollowCard>
      <Column padding={"6px 0 0 8px"}>
        <Text color={"#ababab"} lh={"18px"} fs={"1.2rem"}>
          Suggestion
        </Text>
        <Text color={"#1e1e1e"} lh={"21px"} fw={"600"} fs={"1.4rem"}>
          COLLECTOR
        </Text>
      </Column>
    </RowFollowCard>
  );
};

import React from "react";
import { Column, Text } from "../../../atoms";
import { RowFollowCard } from "../RowFollowCard";

export const SocialUserCard: React.FC = () => {
  return (
    <RowFollowCard type={"social"} size={"34px"}>
      <Column padding={"6px 0 0 8px"}>
        <Text color={"#1e1e1e"} lh={"1.6rem"} fs={"1.4rem"}>
          Suggestion
        </Text>
        <Text color={"#ababab"} lh={"1.6rem"} fs={"1.4rem"}>
          4시간전
        </Text>
      </Column>
    </RowFollowCard>
  );
};

import React from "react";
import styled from "@emotion/styled";
import { SocialCard } from "../../molecules/Card";
import { useRouter } from "next/router";

interface SocialCardListProps {
  items: number[];
}

export const StyleCardList: React.FC<SocialCardListProps> = ({ items }) => {
  const router = useRouter();
  const goDetail = () => {
    router.push("/social/detail");
  };

  return (
    <SocialContainer>
      {items.map((item, index) => (
        <React.Fragment key={`card-id-${index}`}>
          <SocialCard _onClick={goDetail} />
        </React.Fragment>
      ))}
    </SocialContainer>
  );
};

/* SocialCard */
const SocialContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

import React from "react";
import styled from "@emotion/styled";
import { BrandCard } from "../../molecules/Card/BrandCard";

export const BrandCardList: React.FC = () => {
  return (
    <>
      <Container>
        <BrandCard src="/images/brand/chanel.svg" alt={"chanel"} />
        <BrandCard src="/images/brand/hermes.svg" alt={"hermes "} />
        <BrandCard src="/images/brand/dior.svg" alt={"dior"} />
        <BrandCard src="/images/brand/louisVuitton.svg" alt={"louisVuitton"} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  padding: 0 10px;
`;

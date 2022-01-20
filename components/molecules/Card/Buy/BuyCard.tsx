import React from "react";
import Image from "next/image";
import { BuyCardContainer, ImageGrid, ItemInfo, ProductText } from "../style";

interface Props {
  testId?: string;
}
export const BuyCard: React.FC<Props> = ({
  testId,
}) => {
  return (
    <BuyCardContainer data-testid={testId}>
      <ImageGrid>
        <Image src="/images/bestItem02.png" width="100%" height="100%" alt="" />
      </ImageGrid>
      <ItemInfo>
        <ProductText fw="bold">BQ6546-011</ProductText>
        <ProductText>Nike Big Swoosh Full Zip Jacket Black Sail</ProductText>
        <ProductText className="detail">
          나이키 빅 스우시 풀 집 자켓 블랙 세일
        </ProductText>
      </ItemInfo>
    </BuyCardContainer>
  );
};

BuyCard.defaultProps = {
  testId: 'test-molecule-buycard',
};
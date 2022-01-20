import { useRouter } from "next/router";
import React from "react";
import { Text } from "../../atoms";
import { BuyContainer, Container, FixedHeight, BuyOption } from "./style";

interface IProps {
  option?: boolean;
}
export const BuyHeader: React.FC<IProps> = ({ option }) => {
  const router = useRouter();
  return (
    <>
      <BuyContainer>
        <Container>
          <div onClick={() => router.back()}>뒤로가기</div>
          <Text fs="1.8rem" textAlign="center">
            <strong>구매하기</strong>
            {option && <BuyOption>(가격 단위 원)</BuyOption>}
          </Text>
          <div>옵션</div>
        </Container>
      </BuyContainer>
      <FixedHeight />
    </>
  );
};

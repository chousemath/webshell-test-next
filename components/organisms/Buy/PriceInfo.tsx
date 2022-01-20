import React from "react";
import styled from "@emotion/styled";
import { Row, Button } from "../../atoms";

interface IProps {
  point?: boolean;
}
export const PriceInfo: React.FC<IProps> = ({ point }) => {
  return (
    <>
      <Row justifyContent="space-between" alignItems="center" padding="5px 0">
        {point ? (
          <>
            <Text color="rgba(34,34,34,.5)">포인트</Text>
            <Button fs="1.2rem" padding="4px 6px" bgColor="#000" color="#fff">
              사용하기
            </Button>
          </>
        ) : (
          <>
            <Text color="rgba(34,34,34,.5)">즉시 구매가</Text>
            <Text>215,000원</Text>
          </>
        )}
      </Row>
      <Row justifyContent="space-between" alignItems="center" padding="5px 0">
        <Text color="rgba(34,34,34,.5)">검수비</Text>
        <Text>무료</Text>
      </Row>
      <Row justifyContent="space-between" alignItems="center" padding="5px 0">
        <Text color="rgba(34,34,34,.5)">배송비</Text>
        <Text>무료</Text>
      </Row>
    </>
  );
};

const Text = styled.p<any>`
  font-size: 1.4rem;
  color: ${({ color }) => color};
`;

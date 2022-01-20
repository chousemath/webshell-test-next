import React from "react";
import { Row, Text } from "../../atoms";
import { InstantItem, AreaList, AreaItem } from "./style";

export const PriceInstant: React.FC = () => {
  return (
    <>
      <Row justifyContent="center" alignItems="center">
        <Row justifyContent="center" alignItems="center" width="100%">
          <InstantItem>
            <Text fs="1.2rem" color="rgba(34,34,34,.5)">
              즉시 구매가
            </Text>
            <Text fs="1.6rem">137,000원</Text>
          </InstantItem>
          <InstantItem>
            <Text fs="1.2rem" color="rgba(34,34,34,.5)">
              즉시 판매가
            </Text>
            <Text fs="1.6rem">135,000원</Text>
          </InstantItem>
        </Row>
      </Row>
      <Row justifyContent="center" alignItems="center">
        <AreaList>
          <AreaItem>구매 입찰</AreaItem>
          <AreaItem className="now">즉시 구매</AreaItem>
        </AreaList>
      </Row>
    </>
  );
};

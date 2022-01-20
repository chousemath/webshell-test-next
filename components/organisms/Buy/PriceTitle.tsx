import React from "react";
import { IPriceTitle } from "../../../interfaces/IBuy";
import { Row, Text } from "../../atoms";

export const PriceTitle: React.FC<IPriceTitle> = ({
  title,
  price,
  total,
  color,
}) => {
  return (
    <Row justifyContent="space-between" padding="20px 0">
      <Text fs={total ? "1.6rem" : "1.4rem"} fw="700">
        {title}
      </Text>
      <Text fs="2rem" fw="700" color={color}>
        {price}원
      </Text>
    </Row>
  );
};

import Image from "next/image";
import React from "react";
import { Row, Text, Input, Column } from "../../atoms";
import { DeliveryWrap } from "./style";

export const DeliveryInfo: React.FC = () => {
  return (
    <>
      <Row justifyContent="space-between" alignItems="center">
        <Text fs="1.8rem" fw="700">
          배송 주소
        </Text>
        <Text fs="1.3rem" color="rgba(34,34,34,.5)">
          + 새 주소 추가
        </Text>
      </Row>
      <Input placeholder="주소를 추가해주세요. >" />
      <Row
        justifyContent="space-between"
        alignItems="center"
        padding="20px 0 0"
      >
        <Text fs="1.8rem" fw="700">
          배송 방법
        </Text>
      </Row>
      <DeliveryWrap>
        <Image
          src="/images/delivery_icon.png"
          width="40px"
          height="40px"
          alt="icon"
        />
        <Column padding="0 0 0 20px">
          <Text fs="1.4rem">일반배송 1,500원</Text>
          <Text fs="1.4rem" color="rgba(34,34,34,.5)">
            검수 후 배송 ・ 5-7일 내 도착 예정
          </Text>
        </Column>
      </DeliveryWrap>
    </>
  );
};

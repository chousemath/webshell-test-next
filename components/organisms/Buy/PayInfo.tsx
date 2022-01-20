import React from "react";
import { Row, Text, Input, Column } from "../../atoms";
import { PayList, PayItem } from "./style";
export const PayInfo: React.FC = () => {
  return (
    <Column margin="20px 0 0 0">
      <Text fs="1.8rem" fw="700">
        결제 방법
      </Text>
      <Row padding="10px 0 0" alignItems="center">
        <Text fs="1.5rem">간편결제 </Text>
        <Text padding="0 0 0 5px" fs="1.3rem" color="rgba(34,34,34,.5)">
          일시불
        </Text>
      </Row>
      <Input placeholder="카드를 추가해주세요. >" disabled />
      <Row padding="20px 0 0" alignItems="center">
        <Text fs="1.5rem">일반 결제 </Text>
        <Text padding="0 0 0 5px" fs="1.3rem" color="rgba(34,34,34,.5)">
          일시불・할부
        </Text>
      </Row>
      <PayList>
        <PayItem>신용/체크카드</PayItem>
        <PayItem>네이버페이</PayItem>
        <PayItem>카카오페이</PayItem>
        <PayItem>토스</PayItem>
        <PayItem>페이코</PayItem>
      </PayList>
    </Column>
  );
};

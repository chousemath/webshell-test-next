import React from "react";
import { Text } from "../../atoms";
import { Row } from "../../atoms/Grid";
import { Container, RowWrap, Wrap } from "./style";
interface Props {
  title: string;
}
export const RecentHistory: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Row justifyContent="space-between" alignItems="center">
        <Text fs="1.6rem" fw="bold">
          {title}
        </Text>
        <Text fs="1.3rem" color="rgba(34,34,34,.5)">
          더보기
        </Text>
      </Row>
      <RowWrap>
        <Wrap>
          <Text fs="1.3rem" color="rgba(34,34,34,.8)">
            전체
          </Text>
          <Text fs="1.8rem" fw="bold" color="#f15746">
            0
          </Text>
        </Wrap>
        <Wrap>
          <Text fs="1.3rem" color="rgba(34,34,34,.8)">
            입찰중
          </Text>
          <Text fs="1.8rem" fw="bold" color="#000">
            0
          </Text>
        </Wrap>
        <Wrap>
          <Text fs="1.3rem" color="rgba(34,34,34,.8)">
            진행중
          </Text>
          <Text fs="1.8rem" fw="bold" color="#000">
            0
          </Text>
        </Wrap>
        <Wrap>
          <Text fs="1.3rem" color="rgba(34,34,34,.8)">
            종료
          </Text>
          <Text fs="1.8rem" fw="bold" color="#000">
            0
          </Text>
        </Wrap>
      </RowWrap>
    </Container>
  );
};

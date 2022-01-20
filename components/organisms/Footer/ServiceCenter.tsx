import React from "react";
import { Text } from "../../atoms";
import {
  ServiceArea,
  Strong,
  ServiceTime,
  FooterButtonWrap,
  FooterButton,
  FooterMenu,
} from "./style";
export const ServiceCenter: React.FC = () => {
  return (
    <ServiceArea>
      <section>
        <Strong>고객센터 1588-7813.</Strong>
        <ServiceTime>
          <Text fs="1.3rem" color="rgba(34,34,34,.5)">
            운영시간 평일 11:00 - 18:00 (토 ∙ 일, 공휴일 휴무)
          </Text>
          <Text fs="1.3rem" color="rgba(34,34,34,.5)">
            점심시간 평일 13:00 - 14:00
          </Text>
        </ServiceTime>
        <Text fs="1.3rem" padding="8px 0 0 0">
          1:1 문의하기는 앱에서만 가능합니다.
        </Text>
        <FooterButtonWrap>
          <FooterButton>자주 묻는 질문</FooterButton>
        </FooterButtonWrap>
      </section>
      <FooterMenu>
        <div>
          <Strong>이용안내</Strong>
          <ul>
            <li>
              <a>검수기준</a>
            </li>
            <li>
              <a>이용정책</a>
            </li>
            <li>
              <a>패널티정책</a>
            </li>
            <li>
              <a>커뮤니티 가이드라인</a>
            </li>
          </ul>
        </div>
        <div>
          <Strong>고객지원</Strong>
          <ul>
            <li>
              <a>공지사항</a>
            </li>
            <li>
              <a>서비스 소개</a>
            </li>
            <li>
              <a>쇼룸 안내</a>
            </li>
            <li>
              <a>판매자 방문접수</a>
            </li>
          </ul>
        </div>
      </FooterMenu>
    </ServiceArea>
  );
};

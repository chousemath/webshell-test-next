import React, { useState } from "react";
import {
  FooterSns,
  SnsBox,
  BtnBusiness,
  BusinessInfo,
  NoticeArea,
} from "./style";
export const SnsFooter: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <FooterSns>
        <SnsBox>
          <a href="">인스타그램</a>
          <a href="">페이스북</a>
          <a href="">카카오채널</a>
        </SnsBox>
        <BtnBusiness>
          <button onClick={() => setShow(!show)}>사업자정보</button>
        </BtnBusiness>
      </FooterSns>
      <BusinessInfo className={show ? "show" : ""}>
        <div>
          <dl>
            <dt>크림 주식회사 · 대표</dt>
            <dd>김창욱</dd>
          </dl>
          <dl>
            <dt>사업자등록번호:</dt>
            <dd>570-88-01618</dd>
            <dd>
              <a>사업자정보확인</a>
            </dd>
          </dl>
          <dl>
            <dt>통신판매업:</dt>
            <dd>제 2021-성남분당C-0093호</dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>사업장소재지:</dt>
            <dd>경기도 성남시 분당구 분당내곡로 117, 8층</dd>
          </dl>
          <dl>
            <dt>개인정보관리책임자: </dt>
            <dd>김미진</dd>
          </dl>
          <dl>
            <dt>호스팅 서비스:</dt>
            <dd>네이버 클라우드 (주)</dd>
          </dl>
        </div>
      </BusinessInfo>
      <NoticeArea>
        크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
        판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단, 거래과정에서
        검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
      </NoticeArea>
    </>
  );
};

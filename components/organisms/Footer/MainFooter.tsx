import Link from "next/link";
import React from "react";
import { Copyright } from "./Copyright";
import { ServiceCenter } from "./ServiceCenter";
import { SnsFooter } from "./SnsFooter";
import { FooterContainer, CorporationArea, TermList, TermItem } from "./style";

export const MainFooter: React.FC = () => {
  return (
    <FooterContainer>
      <ServiceCenter />
      <CorporationArea>
        <TermList>
          <TermItem>
            <a href="">회사소개</a>
          </TermItem>
          <TermItem>
            <a href="">인재채용</a>
          </TermItem>
          <TermItem>
            <a href="">이용약관</a>
          </TermItem>
          <TermItem>
            <strong>
              <a href="">개인정보처리방침</a>
            </strong>
          </TermItem>
          <TermItem>
            <Link href="/native">
              <a style={{
                fontWeight: 'bold',
                color: 'red',
                backgroundColor: 'yellow',
              }}>XYZ</a>
            </Link>
          </TermItem>
        </TermList>
      </CorporationArea>
      <SnsFooter />
      <div>
        <Copyright />
      </div>
    </FooterContainer >
  );
};

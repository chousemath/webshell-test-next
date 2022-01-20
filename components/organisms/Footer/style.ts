import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import { flexbox, inlineFlexbox } from "../../../styles/utils/flexbox";

export const FooterContainer = styled.footer`
  padding: 40px 16px 0;
`;
export const ServiceArea = styled.section`
  padding-bottom: 50px;
  border-bottom: 1px solid #ebebeb;
`;
export const Strong = styled.strong<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const ServiceTime = styled.div`
  padding-top: 8px;
`;
export const FooterButtonWrap = styled.div`
  ${inlineFlexbox()}
  margin-top: 17px;
  background-color: #222;
`;
export const FooterButton = styled.a`
  padding: 8px 14px;
  color: #fafafa;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.06px;
`;

export const FooterMenu = styled.div`
  ${flexbox("space-between")}
  margin-top: 50px;
  div {
    width: 50%;
    ul {
      padding-top: 16px;
    }
    li {
      margin-top: 12px;
      font-size: 1.4rem;
      color: rgba(34, 34, 34, 0.5);
    }
    li:nth-of-type(1) {
      margin-top: 0;
    }
  }
`;

export const CorporationArea = styled.section`
  margin-top: 30px;
`;

export const TermList = styled.ul`
  ${inlineFlexbox()};
`;

export const TermItem = styled.li`
  font-size: 1.4rem;
  margin-right: 12px;
`;

export const FooterSns = styled.section`
  ${flexbox("between")};
  padding-top: 50px;
`;

export const SnsBox = styled.div`
  ${flexbox("between")};
  width: 50%;
  font-size: 13px;
`;

export const BtnBusiness = styled.div`
  font-size: 13px;
  letter-spacing: -0.07px;
`;

export const BusinessInfo = styled.div`
  display: none;
  padding-top: 20px;

  &.show {
    display: block;
  }
  dl {
    ${flexbox("start")};
    line-height: 20px;
    font-size: 13px;
    letter-spacing: -0.07px;
    color: rgba(34, 34, 34, 0.5);
  }
  dd {
    padding-left: 4px;
  }
`;
export const NoticeArea = styled.div`
  padding-top: 20px;
  line-height: 1.6rem;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.4);
`;

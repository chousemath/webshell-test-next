import styled from "@emotion/styled";
import { flexbox } from "../../../styles/utils/flexbox";

interface Props {
  theme?: any;
}

export const FormInputContainer = styled.div<Props>`
  ${flexbox("start", "start")}
  flex-direction: column;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: 10px 0 14px;
`;

export const CheckBoxContainer = styled.div`
  padding: 12px 0;
`;

export const CheckBox = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #bcbcbc;
  cursor: pointer;
`;

export const UserInfoContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const UserInfoFormWrap = styled.div`
  padding-top: 25px;
`;

export const ModifyButtonWrap = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;
export const FormBuyCheckBoxContainer = styled.div`
  ${flexbox("between")};
  padding: 19px 0 20px;
  border-bottom: 1px solid #ebebeb;
  &:nth-of-type(1) {
    padding-top: 3px;
  }
`;

export const CheckContent = styled.div`
  flex: 1;
  padding-right: 10px;
`;
export const BuyCheckBoxContainer = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  cursor: pointer;
`;

export const CheckView = styled.a`
  display: inline-block;
  margin-top: 5px;
  font-size: 1.4rem;
  color: #1d85e6;
  border-bottom: 1px solid #1d85e6;
`;

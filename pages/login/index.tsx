import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Container, AppContainer } from "../../components/atoms";

import {
  FormInput,
  AccountButton,
  UserSearchBtns,
} from "../../components/molecules";

import { AccountButtonProps } from "../../interfaces/IElements";

const containerStyle = css`
  padding: 16px;
`;

const Login: React.FC = () => {
  const naverLogin = () => {
    alert("네이버 로그인");
  };
  /* 네이버 로그인 버튼 속성들 */
  const AccountBtnProperty: AccountButtonProps = {
    btnName: "네이버로 로그인",
    iconUrl: "https://www.pet-friends.co.kr/img/icon_naver_square.fd63a134.svg",
    bgColor: "#5ac451",
    _onClick: naverLogin,
  };

  return (
    <>
      <AppContainer>
        <Container css={containerStyle}>
          <Logo />
          <FormInputWrapper>
            <FormInput
              id={"userId"}
              placeholder={"예) kream@kream.co.kr"}
              labelText="이메일 주소"
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <FormInput
              type={"password"}
              id={"userPw"}
              placeholder={""}
              labelText="비밀번호"
            />
          </FormInputWrapper>
          <ButtonWrapper>
            <AccountButton />
            <AccountButton {...AccountBtnProperty} />
          </ButtonWrapper>
          <SearchBtnWrapper>
            <UserSearchBtns />
          </SearchBtnWrapper>
        </Container>
      </AppContainer>
    </>
  );
};

const FormInputWrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 0 14px;
`;

const ButtonWrapper = styled.div`
  padding-top: 45px;
  height: 157px;
  width: 100%;
  div:nth-of-type(2) {
    margin-top: 8px;
  }
`;

const SearchBtnWrapper = styled.div`
  margin-top: 18px;
`;

const Logo = styled.div`
  background-color: black;
  width: 100%;
  height: 106px;
  padding-bottom: 50px;
  text-align: center;
  font-size: 0rem;
`;

export default Login;

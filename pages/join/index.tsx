import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, AppContainer } from "../../components/atoms";
import { ITheme } from "../../interfaces/ITheme";
import {
  FormInput,
  FormCheckBox,
  AccountButton,
} from "../../components/molecules";

const containerStyle = css`
  padding: 16px;
`;

const Join: React.FC = () => {
  const userJoin = () => {
    alert("join");
  };
  return (
    <>
      <AppContainer>
        <Container css={containerStyle}>
          <Title>회원가입</Title>
          <FormInput
            id={"userId"}
            placeholder={"예) kream@kream.co.kr"}
            labelText="이메일 주소*"
          />
          <FormInput
            type={"password"}
            id={"userPw"}
            placeholder={"영문, 숫자, 특수문자 조합 8-16자"}
            labelText="비밀번호*"
          />
          <CheckBoxContainer>
            <FormCheckBox
              id="ck-1"
              text={"[필수] 만14세 이상이며 모두 동의합니다."}
            />
            <FormCheckBox
              id="ck-3"
              text={"[선택] 광고성 정보 수신에 모두 동의합니다."}
              margin={"16px 0 0 0"}
            />
          </CheckBoxContainer>
          <AccountButton btnName={"가입하기"} _onClick={userJoin} />
        </Container>
      </AppContainer>
    </>
  );
};

const Title = styled.h2<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding-bottom: 28px;
`;

const CheckBoxContainer = styled.div`
  padding: 24px 0 40px;
`;

export default Join;

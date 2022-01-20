import { css } from "@emotion/react";
import { Container, AppContainer, Text } from "../../components/atoms";
import { FormInput, AccountButton } from "../../components/molecules";
import { AccountButtonProps, FormInputProps } from "../../interfaces/IElements";

const containerStyle = css`
  padding: 16px;
`;

const FindEmail = () => {
  const AccountBtnProperty: AccountButtonProps = {
    btnName: "이메일 찾기",
  };

  const FormInputProperty: FormInputProps = {
    type: "text",
    id: "userPhone",
    placeholder: "가입하신 휴대폰 번호",
    labelText: "휴대폰 번호",
  };
  return (
    <AppContainer>
      <Container css={containerStyle}>
        <Text fs="1.3rem">
          가입 시 등록한 휴대폰 번호를 입력하면 이메일 주소의 일부를
          알려드립니다.
        </Text>
        <FormInput {...FormInputProperty} />
        <AccountButton {...AccountBtnProperty} />
      </Container>
    </AppContainer>
  );
};

export default FindEmail;

import { css } from "@emotion/react";
import { Container, AppContainer, Text } from "../../components/atoms";
import { FormInput, AccountButton } from "../../components/molecules";
import { AccountButtonProps, FormInputProps } from "../../interfaces/IElements";

const containerStyle = css`
  padding: 16px;
`;

const FindPassword = () => {
  const FormInputProperties: Array<FormInputProps> = [
    {
      type: "text",
      id: "userPhone",
      placeholder: "가입하신 휴대폰 번호",
      labelText: "휴대폰 번호",
    },
    {
      type: "email",
      id: "emailId",
      placeholder: "예) kream@kream.co.kr",
      labelText: "이메일 주소",
    },
  ];

  const AccountBtnProperty: AccountButtonProps = {
    btnName: "문자로 발송하기",
  };

  return (
    <AppContainer>
      <Container css={containerStyle}>
        <Text fs="1.3rem">
          가입 시 등록하신 휴대폰 번호와 이메일을 입력하심면, 휴대폰으로 임시
          비밀번호를 전송해 드립니다. 비밀번호 찾기에 어려움이 있으시다면
          고객센터 1588-7813으로 문의 바랍니다.
        </Text>
        <FormInput {...FormInputProperties[0]} />
        <FormInput {...FormInputProperties[1]} />
        <AccountButton {...AccountBtnProperty} />
      </Container>
    </AppContainer>
  );
};

export default FindPassword;

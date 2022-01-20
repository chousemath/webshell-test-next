import React from "react";
import { Column } from "../../atoms";
import { Text } from "../../atoms/Text";
import { FormUserInfo } from "../../molecules/Form";
import { UserProfileWrap } from "./style";

export const UserProfileInfoList: React.FC = () => {
  return (
    <>
      <UserProfileWrap>
        <Column>
          <Text fs="1.8rem" fw="bold">
            로그인 정보
          </Text>
        </Column>
        <Column>
          <FormUserInfo labelText="이메일 주소" value="m******i@naver.com" />
          <FormUserInfo labelText="비밀번호" value="123456" type="password" />
        </Column>
      </UserProfileWrap>
      <UserProfileWrap>
        <Column>
          <Text fs="1.8rem" fw="bold">
            개인정보
          </Text>
        </Column>
        <Column>
          <FormUserInfo labelText="이름" value="mida" />
          <FormUserInfo labelText="휴대폰번호" value="123456" />
          <FormUserInfo labelText="사이즈" value="" />
        </Column>
      </UserProfileWrap>
    </>
  );
};

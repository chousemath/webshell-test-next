import React, { useState } from "react";
import styled from "@emotion/styled";
import { flexbox } from "../../../styles/utils/flexbox";
import { Column, Text } from "../../../components/atoms";
import Layout from "../../../components/organisms/Layout/Layout";
import {
  UserDetail,
  UserProfileInfoList,
} from "../../../components/organisms/User";

const buttons = [
  { text: "이미지 변경", url: "" },
  { text: "삭제", url: "" },
];
const MyProfile: React.FC = () => {
  const [message, setMessage] = useState("messageDisagree");
  const [email, setEmail] = useState("emailDisagree");

  const changeRadioButton = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (type === "message") {
      setMessage(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };
  return (
    <Layout>
      <UserDetail buttons={buttons} userId="mida" userEmail="mida@naver.com" />
      <Column>
        <UserProfileInfoList />
      </Column>
      <Column padding="48px 16px 70px">
        <Text fs="1.8rem" fw="bold">
          광고성 정보 수신
        </Text>
        <AdvertisementReceiveWrap>
          <Text fs="1.5rem">문자 메시지</Text>
          <AdvertisementReceive>
            <RodioLabel htmlFor="messageAgree">수신동의</RodioLabel>
            <RadioInput
              type="radio"
              id="messageAgree"
              value="messageAgree"
              checked={message === "messageAgree"}
              onChange={(e) => changeRadioButton(e, "message")}
            />
            <RodioLabel htmlFor="messageDisagree">수신거부</RodioLabel>
            <RadioInput
              type="radio"
              id="messageDisagree"
              value="messageDisagree"
              checked={message === "messageDisagree"}
              onChange={(e) => changeRadioButton(e, "message")}
            />
          </AdvertisementReceive>
        </AdvertisementReceiveWrap>
        <AdvertisementReceiveWrap>
          <Text fs="1.5rem">이메일</Text>
          <AdvertisementReceive>
            <RodioLabel htmlFor="emailAgree">수신동의</RodioLabel>
            <RadioInput
              type="radio"
              id="emailAgree"
              value="emailAgree"
              checked={email === "emailAgree"}
              onChange={(e) => changeRadioButton(e, "email")}
            />
            <RodioLabel htmlFor="emailDisagree">수신거부</RodioLabel>
            <RadioInput
              type="radio"
              id="emailDisagree"
              value="emailDisagree"
              checked={email === "emailDisagree"}
              onChange={(e) => changeRadioButton(e, "email")}
            />
          </AdvertisementReceive>
        </AdvertisementReceiveWrap>
      </Column>
    </Layout>
  );
};

export const AdvertisementReceiveWrap = styled.div`
  ${flexbox("between")};
  padding: 26px 0;
  border-bottom: 1px solid #ebebeb;
`;
export const AdvertisementReceive = styled.div``;

export const RodioLabel = styled.label`
  font-size: 1.5rem;
`;
export const RadioInput = styled.input`
  margin: 0px 10px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;

export default MyProfile;

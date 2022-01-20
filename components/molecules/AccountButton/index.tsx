import React from "react";
import { AccountButtonProps } from "../../../interfaces/IElements";
import { ButtonBox, Icon } from "./style";

/*
 * Props가 없을 때, 기본 버튼: 네이버 로그인
 * {로그인, 가입하기, 이메일 아이디 찾기} 버튼 -> btnName: '{해당 이름 입력}', iconUrl="", bgColor=#ebebeb"(default)
 * 네이버 버튼 -> btnName: '네이버로 로그인', iconUrl="https://www.pet-friends.co.kr/img/icon_naver_square.fd63a134.svg", bgColor="#5ac451"
 */

export const AccountButton: React.FC<AccountButtonProps> = ({
  btnName = "로그인",
  iconUrl = "",
  bgColor = "#ebebeb",
  color = "#fff",
  _onClick,
}) => {
  return (
    <ButtonBox bgColor={bgColor} color={color} onClick={_onClick}>
      <Icon src={iconUrl} />
      <span>{btnName}</span>
    </ButtonBox>
  );
};

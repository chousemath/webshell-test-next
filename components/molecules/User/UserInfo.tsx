import React from "react";
import { useRouter } from "next/router";
import { IUserInfo } from "../../../interfaces/IUser";
import { Button, Text } from "../../atoms";
import { UserInfoContainer, ButtonsWrap } from "./style";

export const UserInfo: React.FC<IUserInfo> = ({
  userId,
  userEmail,
  buttons,
  message,
}) => {
  const router = useRouter();
  return (
    <UserInfoContainer>
      <Text fs="1.8rem" fw="bold">
        {userId}
      </Text>
      <Text fs="1.4rem" color="#d3d3d3">
        {userEmail}
      </Text>
      {message && (
        <Text margin="5px 0 0 0" fs="1.2rem" color="rgba(34,34,34,.5)">
          {message}
        </Text>
      )}
      {buttons && (
        <ButtonsWrap>
          {buttons.map((button: any, index: number) => {
            return (
              <Button
                key={index}
                margin="0 10px 0 0"
                padding="8px 14px"
                fs="1.2rem"
                radius="10px"
                border="1px solid #d3d3d3"
                _onClick={() => router.push(`/${button.url}`)}
              >
                {button.text}
              </Button>
            );
          })}
        </ButtonsWrap>
      )}
    </UserInfoContainer>
  );
};

import React from "react";
import { Row } from "../../atoms";
import { UserProfile } from "../../molecules/User";
import { UserInfo } from "../../molecules/User/UserInfo";
import { UserInfoWrap } from "./style";

export const UserDetail: React.FC<any> = ({
  buttons,
  userName,
  userId,
  userEmail,
  message,
}) => {
  return (
    <Row justifyContent="space-between" alignItems="center" padding="16px">
      <UserProfile
        width="100px"
        height="100px"
        src="/images/userProfile02.jpeg"
        userName={userName}
      />
      <UserInfoWrap>
        <UserInfo
          userId={userId}
          userEmail={userEmail}
          buttons={buttons}
          message={message}
        />
      </UserInfoWrap>
    </Row>
  );
};

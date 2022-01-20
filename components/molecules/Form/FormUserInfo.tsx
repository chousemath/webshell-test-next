import React from "react";
import { Button, Input, Label } from "../../atoms";
import { UserInfoContainer, ModifyButtonWrap, UserInfoFormWrap } from "./style";
import { FormInputProps } from "../../../interfaces/IElements";

export const FormUserInfo: React.FC<FormInputProps> = ({
  labelText,
  value,
  type,
}) => {
  return (
    <UserInfoContainer>
      <UserInfoFormWrap>
        <Label>{labelText}</Label>
        <Input
          type={type}
          value={value}
          height="auto"
          padding="10px 0px"
          color="#ddd"
          disabled
        />
      </UserInfoFormWrap>
      <ModifyButtonWrap>
        <Button fw="400">변경</Button>
      </ModifyButtonWrap>
    </UserInfoContainer>
  );
};

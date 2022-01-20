import React from "react";
import { Text } from "../../atoms";
import {
  FormBuyCheckBoxContainer,
  CheckContent,
  BuyCheckBoxContainer,
  CheckView,
} from "./style";
interface IProps {
  id?: string;
  title?: string;
  text?: string;
  checkView?: string;
}
export const FormBuyCheckBox: React.FC<IProps> = ({
  title,
  text,
  checkView,
}) => {
  return (
    <FormBuyCheckBoxContainer>
      <CheckContent>
        <Text fs="1.5rem">{title}</Text>
        <Text fs="1.3rem" color="rgba(34,34,34,.5)">
          {text}
        </Text>
        <CheckView>{checkView}</CheckView>
      </CheckContent>
      <BuyCheckBoxContainer type="checkbox" />
    </FormBuyCheckBoxContainer>
  );
};

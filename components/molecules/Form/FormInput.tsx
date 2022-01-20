import React from "react";
import { Input, Label } from "../../atoms";
import { FormInputContainer } from "./style";
import { FormInputProps } from "../../../interfaces/IElements";

export const FormInput: React.FC<FormInputProps> = ({
  id,
  placeholder,
  labelText,
  type,
}) => {
  return (
    <>
      <FormInputContainer>
        <Label id={id} className={"label-bold"}>
          {labelText}
        </Label>
        <Input id={id} placeholder={placeholder} type={type} />
      </FormInputContainer>
    </>
  );
};

import React from "react";
import { css } from "@emotion/react";
import { Container, Label, Button, Row } from "../../atoms";
import { CheckBox } from "./style";

interface FormCheckBoxProps {
  id?: string;
  text?: string;
  margin?: string;
}

const LabelStyles = css`
  flex: 1;
  justify-content: start;
  margin-left: 12px;
`;

export const FormCheckBox: React.FC<FormCheckBoxProps> = ({
  id,
  text,
  margin,
}) => {
  return (
    <Container margin={margin}>
      <Row>
        <CheckBox id={id} type="checkbox" />
        <Label css={LabelStyles} id={id}>
          {text}
        </Label>
        <Button>+</Button>
      </Row>
    </Container>
  );
};

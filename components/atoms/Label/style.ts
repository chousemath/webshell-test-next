import styled from "@emotion/styled";
import { inlineFlexbox } from "../../../styles/utils/flexbox";
import { textStyle } from "../../../styles/utils/typography";

export interface Prop {
  fw?: string;
  fs?: string;
  color?: string;
  lh?: string;
  textAlign?: string;
  margin?: string;
  width?: string;
  height?: string;
  padding?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  theme?: any;
}

const LabelStyle = styled.label<Prop>`
  ${inlineFlexbox()}
  ${textStyle("xs")};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  &.label-bold {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export default LabelStyle;

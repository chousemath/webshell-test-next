import styled from "@emotion/styled";
import { inlineFlexbox } from "../../../styles/utils/flexbox";

export interface Prop {
  width?: string;
  height?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  padding?: string;
  border?: string;
  fs?: string;
  fw?: string;
  color?: string;
  shadow?: string;
  addstyle?: any;
  theme?: {
    [propName: string]: any;
  };
}

const ButtonStyle = styled.button<Prop>`
  ${inlineFlexbox()}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fs }) => fs};
  color: ${({ color }) => color};
  box-shadow: ${({ shadow }) => shadow};
  border-radius: ${({ radius }) => (radius ? radius : "0px")};
  border: ${({ border }) => border};
  background-color: ${({ bgColor }) => bgColor};
  font-weight: ${({ fw, theme }) => fw && theme.fontWeights[fw]};
  cursor: pointer;

  ${({ addstyle }) => addstyle};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export default ButtonStyle;

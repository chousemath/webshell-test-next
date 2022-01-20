import styled from "@emotion/styled";

export interface Prop {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  fs?: string;
  fw?: string;
  color?: string;
  lh?: string;
  textAlign?: string;
  ls?: string;
  wb?: string;
  ws?: string;
  addstyle?: any;
  cursor?: string;
  theme?: {
    [propName: string]: any;
  };
}

const TextStyle = styled.p<Prop>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  text-align: ${({ textAlign }) => textAlign};
  cursor: ${({ cursor }) => cursor};
`;

export default TextStyle;

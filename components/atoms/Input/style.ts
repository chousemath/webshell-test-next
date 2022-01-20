import styled from "@emotion/styled";

export interface Prop {
  className?: string;
  border?: string;
  radius?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  fontSize?: string;
  va?: string;
  shadow?: string;
  padding?: string;
  addstyle?: any;
  theme?: {
    [propName: string]: any;
  };
}

const InputStyle = styled.input<Prop>`
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor, theme }) => bgColor && theme.colors.white};
  color: ${({ color }) => color};
  font-size: ${({ fontSize, theme }) => fontSize && theme.fontSizes.base};
  box-shadow: ${({ shadow }) => shadow};
  padding: ${({ padding }) => padding};
  vertical-align: ${({ va }) => va};
  // 추후 수정 2022-01-12
  border-bottom: 1px solid #ebebeb;

  &:focus {
    outline: none;
    border-bottom: 2px solid #333;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &.error {
    color: ${({ theme }) => theme.colors.red};
  }

  ${({ addstyle }) => addstyle};
`;
export default InputStyle;

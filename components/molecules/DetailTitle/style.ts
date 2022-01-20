import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import { IDetailTitleProps } from "../../../interfaces/IElements";

type IUnion = ITheme & IDetailTitleProps;

export const TitleBox = styled.div<IUnion>`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: -0.21px;
  font-weight: ${({ isBold, theme }) =>
    isBold ? theme.fontWeights.bold : theme.fontWeights.regular};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: 2rem;
  padding-bottom: 1.2rem;
  line-height: 2.2rem;
`;

export const UploadButton = styled.button<ITheme>`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  padding: 0 4px;
`;

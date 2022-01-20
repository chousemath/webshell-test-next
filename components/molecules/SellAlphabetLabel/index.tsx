import styled from "@emotion/styled";
import { SellAlphabetLabelProps } from "../../../interfaces/IElements";
import { ITheme } from "../../../interfaces/ITheme";

export const SellAlphabetLabel: React.FC<SellAlphabetLabelProps> = ({
  alphabet = "A",
}) => {
  return (
    <LabelBox>
      <span>{alphabet}</span>
    </LabelBox>
  );
};

const LabelBox = styled.div<ITheme>`
  display: block;
  padding: 0 16px;
  height: 30px;
  line-height: 30px;
  background-color: rgb(250, 250, 250);
  & > span {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: rgba(132, 132, 132, 1);
    text-align: left;
  }
`;

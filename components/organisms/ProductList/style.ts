import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import { flexbox } from "../../../styles/utils/flexbox";

export const ListContainer = styled("div")`
  padding: 10px;
  font-size: 1.5rem;
`;

export const ProductContent = styled.div`
  padding: 16px 16px 0;
`;

export const SearchContainer = styled.ul`
  ${flexbox("between")}
`;
export const SearchOption = styled.li<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  cursor: pointer;
`;
export const ListCardContainer = styled("ul")`
  ${flexbox("between")}
  flex-wrap: wrap;
  align-items: stretch;
`;

export const ListCardGrid = styled.li`
  margin: 15px 0 0;
  width: 50%;
  vertical-align: top;
  &:nth-of-type(odd) {
    padding-right: 6.5px;
  }
  &:nth-of-type(even) {
    padding-left: 6.5px;
  }
`;

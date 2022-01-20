import styled from "@emotion/styled";
import { scrollBox } from "../../../styles/utils/scrollbox";
import { ITheme } from "../../../interfaces/ITheme";
import { flexbox } from "../../../styles/utils/flexbox";

export const Container = styled.div`
  position: relative;
  margin: 7px 0;
`;

export const CardContainer = styled.div`
  ${scrollBox()}
  margin-bottom: 40px;
`;

export const CardGrid = styled.div`
  margin: 15px 0 0;
  display: inline-block;
  padding: 0 8px;
  width: 150px;
  vertical-align: top;
  cursor: pointer;
  &.styleCardGrid {
    width: 132px;
    padding: 0 4px;
  }
  &:first-of-type {
    padding-left: 0;
  }
`;
export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 11px 9px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.span`
  line-height: 1.4rem;
  font-size: 1.2rem;
  color: rgba(34, 34, 34, 0.5);
`;

export const Desc = styled.span`
  font-weight: 600;
`;

import styled from "@emotion/styled";

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
`;

export const Li = styled.li`
  list-style: none;
  flex: auto;
  display: inline-flex;
  align-items: flex-start;
  &:nth-of-type(2):before {
    content: "";
    margin-top: 3px;
    display: inline-block;
    width: 1px;
    height: 13px;
    background-color: #d3d3d3;
  }

  &::nth-of-type(3):before {
    content: "";
    margin-top: 3px;
    display: inline-block;
    width: 1px;
    height: 13px;
    background-color: #d3d3d3;
  }
`;

export const A = styled.a`
  margin: auto;
  padding: 0 10px;
  letter-spacing: -0.07px;
  font-size: 13px;
  color: inherit;
  text-decoration: none;
`;

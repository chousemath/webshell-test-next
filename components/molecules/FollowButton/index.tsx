import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

export const FollowButton: React.FC = () => {
  const _onClick = () => {
    alert("press Follow up button!");
  };
  return (
    <ButtonBox>
      <button onClick={_onClick}>Follow+</button>
    </ButtonBox>
  );
};

const ButtonBox = styled.div<ITheme>`
  border-radius: 30px;
  width: 45px;
  background-color: black;
  line-height: 0.4px;
  text-align: center;
  & > button {
    color: white;
    font-size: 0.2px;
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;

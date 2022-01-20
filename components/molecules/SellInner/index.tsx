import { ISellInnerProps } from "../../../interfaces/IElements";
import { ButtonBox, LeftImageBox, RightImageBox } from "./style";

export const SellInner: React.FC<ISellInnerProps> = ({
  children = "Bags",
  _onClick,
}) => {
  return (
    <ButtonBox onClick={_onClick}>
      <span>{children}</span>
    </ButtonBox>
  );
};

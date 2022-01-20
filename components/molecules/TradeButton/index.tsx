import { Button, Strong, InnerBox, Span, Em, Won } from "./style";
import { TradeButtonProps } from "../../../interfaces/IElements";

export const TradeButton: React.FC<TradeButtonProps> = ({
  isBuyButton,
  price,
  _onClick,
}) => {
  const styles: TradeButtonProps = { isBuyButton };

  return (
    <Button {...styles} onClick={_onClick}>
      <Strong>{isBuyButton ? "구매" : "판매"}</Strong>
      <InnerBox>
        <Span>
          <Em>{price}</Em>
          <Won>원</Won>
        </Span>
        <span>즉시 {isBuyButton ? "구매가" : "판매가"}</span>
      </InnerBox>
    </Button>
  );
};

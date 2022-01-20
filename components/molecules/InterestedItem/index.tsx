import Image from "next/image";
import { Button, Span } from "./style";
import { InterestedItemProps } from "../../../interfaces/IElements";

export const InterestedItem: React.FC<InterestedItemProps> = ({
  src = "/images/cloneIcon.png",
  width = "20px",
  height = "20px",
  count = 0,
  _onClick,
}) => {
  return (
    <Button onClick={_onClick}>
      <Image src={src} width={width} height={height} layout="fixed" alt="" />
      <Span>{count}</Span>
    </Button>
  );
};

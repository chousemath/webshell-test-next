import { Img, Text } from "../../atoms";
import { Container, Span } from "./style";

interface IDeleveryInfoProps {
  src: string;
  isExpressDelivery?: boolean;
  price?: string;
  expireDate?: string;
}
export const DeliveryInfo: React.FC<IDeleveryInfoProps> = ({
  src = "/images/newItem01.jpeg",
  isExpressDelivery,
  price,
  expireDate = "내일 1/15(토)",
}) => {
  return (
    <Container>
      <Img src={src} alt="delivery_info" size={"40px"} className={"user-img"} />
      <div>
        <Text fs="1.4rem">
          <Span>{isExpressDelivery ? "빠른배송" : "일반배송"}</Span>{" "}
          {price ? price : "5,000원"}
        </Text>
        <Text lh="16px" fs="1.4rem" color="rgba(34,34,34,.5)">
          지금 결재시 {expireDate} 도착 예정
        </Text>
      </div>
    </Container>
  );
};

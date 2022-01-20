import styled from "@emotion/styled";
import { TradeButton, InterestedItem } from "../../molecules";
import { useRouter } from "next/router";

export const ProductFixedBar = () => {
  const router = useRouter();
  return (
    <Container>
      <InnerContainer>
        <InterestedItem />
        <TradeButton
          isBuyButton={true}
          price="4,000,000"
          _onClick={() => router.push("/buy")}
        />
        <TradeButton
          isBuyButton={false}
          price="4,000,000"
          _onClick={() => alert("click!")}
        />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  padding: 12px 8px;
  width: 420px;
  height: 76px;
  background-color: #fff;
  top: auto;
  bottom: 0;
  z-index: 1;

  @media (max-width: 420px) {
    width: 100%;
  }
`;
const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  align-items: center;
`;

import Head from "next/head";
import { SearchHeader, SellHeader, OrderHeader, BuyHeader } from "../Header";
import Nav from "../Nav";
import { AppContainer, Container } from "../../atoms";
import { useCallback, useEffect } from "react";
import { FixedHeight } from "../Header/style";

interface Props {
  children?: React.ReactNode;
  header?: string;
  headerTitle?: string;
}
const Layout: React.FC<Props> = ({
  children,
  header,
  headerTitle = "Submit an Item",
}) => {
  //header 컴포넌트 호출 */
  const getHeader = () => {
    switch (header) {
      case "sell":
        return <SellHeader>{headerTitle}</SellHeader>;
      case "order":
        return <OrderHeader />;
      case "search":
        return <SearchHeader />;
      case "buy":
        return <BuyHeader />;
      default:
        return <></>;
    }
  };

  return (
    <AppContainer>
      <Head>
        <title>Kream</title>
        <meta name="description" content="Fake Kream page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container height={"100%"}>
        {getHeader()}
        {children}
        {/* 하단 nav가 fixed 됨에 따라 그 높이만큼 추가 */}
        <FixedHeight />
        <Nav />
      </Container>
    </AppContainer>
  );
};

export default Layout;

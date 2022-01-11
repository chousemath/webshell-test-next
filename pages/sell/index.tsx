
import type { NextPage } from 'next'
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sell: NextPage = () => {
    return (
        <Container>
            <h1>Sell</h1>
        </Container>
    )
}

export default Sell

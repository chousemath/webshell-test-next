import Link from 'next/link'
import styled from '@emotion/styled';

const InvisibleContainer = styled.div`
    display: none;
`;

const RemoteRouter = () => {
    return (
        <InvisibleContainer>
            <Link href="/"><a id="remote-router-home">home</a></Link>
            <Link href="/my"><a id="remote-router-my">my</a></Link>
            <Link href="/sell"><a id="remote-router-sell">sell</a></Link>
            <Link href="/shop"><a id="remote-router-shop">shop</a></Link>
            <Link href="/style"><a id="remote-router-style">style</a></Link>
        </InvisibleContainer>
    );
};

export default RemoteRouter;
import Link from 'next/link'
import styled from '@emotion/styled';

const InvisibleContainer = styled.div`
    display: none;
`;

const RemoteRouter = () => {
    return (
        <InvisibleContainer>
            <Link href="/main"><a
                data-testid="footer-button-0"
                id="remote-router-main">main</a></Link>
            <Link href="/community"><a
                data-testid="footer-button-1"
                id="remote-router-community">community</a></Link>
            <Link href="/sell"><a
                data-testid="footer-button-2"
                id="remote-router-sell">sell</a></Link>
            <Link href="/shop"><a
                data-testid="footer-button-3"
                id="remote-router-shop">shop</a></Link>
            <Link href="/login"><a
                data-testid="footer-button-4"
                id="remote-router-login">login</a></Link>
        </InvisibleContainer>
    );
};

export default RemoteRouter;

import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import RemoteRouter from '../RemoteRouter/RemoteRouter';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <Container>
            {children}
            <RemoteRouter />
        </Container>
    );
};

export default Layout;
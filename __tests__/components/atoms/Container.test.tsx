import { render } from '@testing-library/react'
import { Container } from '../../../components/atoms/Grid';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Atom::Container', () => {
    it('renders itself, and children', () => {
        const testContainerId = 'test-container';
        const testChildId = 'test-child';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Container testId={testContainerId}>
                    <h1 data-testid={testChildId}>Hello!</h1>
                </Container>
            </ThemeProvider>
        );
        const container = getByTestId(testContainerId);
        expect(container).toBeInTheDocument();

        const child = getByTestId(testChildId);
        expect(child).toBeInTheDocument();
    });
});
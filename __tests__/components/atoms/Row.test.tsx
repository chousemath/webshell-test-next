import { render } from '@testing-library/react'
import { Row } from '../../../components/atoms/Grid';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Atom::Row', () => {
    it('renders itself, and children', () => {
        const testGridId = 'test-row';
        const testChildId = 'test-child';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Row testId={testGridId}>
                    <h1 data-testid={testChildId}>Hello!</h1>
                </Row>
            </ThemeProvider>
        );
        const row = getByTestId(testGridId);
        expect(row).toBeInTheDocument();

        const child = getByTestId(testChildId);
        expect(child).toBeInTheDocument();
    });
});
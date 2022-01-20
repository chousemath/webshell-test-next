import { render } from '@testing-library/react'
import { Column } from '../../../components/atoms/Grid';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Atom::Column', () => {
    it('renders itself, and children', () => {
        const testColumnId = 'test-column';
        const testChildId = 'test-child';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Column testId={testColumnId}>
                    <h1 data-testid={testChildId}>Hello!</h1>
                </Column>
            </ThemeProvider>
        );
        const column = getByTestId(testColumnId);
        expect(column).toBeInTheDocument();

        const child = getByTestId(testChildId);
        expect(child).toBeInTheDocument();
    });
});
import { render } from '@testing-library/react'
import { Grid } from '../../../components/atoms/Grid';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Atom::Grid', () => {
    it('renders itself, and children', () => {
        const testGridId = 'test-grid';
        const testChildId = 'test-child';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Grid testId={testGridId}>
                    <h1 data-testid={testChildId}>Hello!</h1>
                </Grid>
            </ThemeProvider>
        );
        const grid = getByTestId(testGridId);
        expect(grid).toBeInTheDocument();

        const child = getByTestId(testChildId);
        expect(child).toBeInTheDocument();
    });
});
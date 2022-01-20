import { render } from '@testing-library/react'
import { AppContainer } from '../../../components/atoms/Grid';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Atom::AppContainer', () => {
    it('renders itself, and children', () => {
        const testAppContainerId = 'test-appcontainer';
        const testChildId = 'test-child';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <AppContainer testId={testAppContainerId}>
                    <h1 data-testid={testChildId}>Hello!</h1>
                </AppContainer>
            </ThemeProvider>
        );
        const appcontainer = getByTestId(testAppContainerId);
        expect(appcontainer).toBeInTheDocument();

        const child = getByTestId(testChildId);
        expect(child).toBeInTheDocument();
    });
});
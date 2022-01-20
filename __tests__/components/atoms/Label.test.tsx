import { render } from '@testing-library/react'
import { Label } from '../../../components/atoms';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Atom::Label', () => {
    it('renders itself', () => {
        const testLabelId = 'test-label';
        const inputId = 'test-input';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Label testId={testLabelId} id={inputId} />
                <input id={inputId} />
            </ThemeProvider>
        );
        const label = getByTestId(testLabelId);
        expect(label).toBeInTheDocument();
    });
});
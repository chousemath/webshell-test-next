import { render } from '@testing-library/react'
import { Input } from '../../../components/atoms';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Atom::Input', () => {
    it('renders itself', () => {
        const testInputId = 'test-input';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Input
                    testId={testInputId}
                />
            </ThemeProvider>
        );
        const input = getByTestId(testInputId);
        expect(input).toBeInTheDocument();
    });
    it('renders itself, with a value', () => {
        const testInputId = 'test-input';
        const value = 'This is a test!!!';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Input
                    testId={testInputId}
                    value={value}
                />
            </ThemeProvider>
        );
        const input = getByTestId(testInputId);
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(value);
    });
});
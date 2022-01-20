import { render } from '@testing-library/react'
import { Text } from '../../../components/atoms';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';
import { FC, useState } from 'react';

interface Props {
    testId: string;
    width?: string;
    height?: string;
    margin?: string;
}
const TestComponent: FC<Props> = (props) => {
    const [count, setCount] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <Text
                {...props}
                _onClick={() => setCount(c => c + 1)}
            >
                {count}
            </Text>
        </ThemeProvider>
    );
};

describe('Atom::Text', () => {
    it('renders text', () => {
        const testId = 'test-text';
        const { getByTestId } = render(<TestComponent testId={testId} />);
        const text = getByTestId(testId);
        expect(text).toBeInTheDocument();
    });
    it('responds to clicks', () => {
        const testId = 'test-text';
        const { getByTestId } = render(<TestComponent testId={testId} />);
        const text = getByTestId(testId);
        text.click();
        text.click();
        text.click();
        expect(text).toHaveTextContent('3');
    });
});
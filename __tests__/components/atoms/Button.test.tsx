import { render } from '@testing-library/react'
import { Button } from '../../../components/atoms';
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
            <Button
                {...props}
                _onClick={() => setCount(c => c + 1)}
            >
                {count}
            </Button>
        </ThemeProvider>
    );
};

describe('Atom::Button', () => {
    it('renders a button', () => {
        const testId = 'test-button';
        const { getByTestId } = render(<TestComponent testId={testId} />);
        const button = getByTestId(testId);
        expect(button).toBeInTheDocument();
    });
    it('responds to clicks', () => {
        const testId = 'test-button';
        const { getByTestId } = render(<TestComponent testId={testId} />);
        const button = getByTestId(testId);
        button.click();
        button.click();
        button.click();
        expect(button).toHaveTextContent('3');
    });
});
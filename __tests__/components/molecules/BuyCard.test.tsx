import { render } from '@testing-library/react'
import { BuyCard } from '../../../components/molecules/Card/Buy';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Molecule::BuyCard', () => {
    it('renders itself, and children', () => {
        const testBuyCardId = 'test-buycard';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <BuyCard testId={testBuyCardId} />
            </ThemeProvider>
        );

        const buyCard = getByTestId(testBuyCardId);
        expect(buyCard).toBeInTheDocument();
    });
});
import { render } from '@testing-library/react'
import { Img } from '../../../components/atoms';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Atom::Img', () => {
    it('renders itself', () => {
        const testImgId = 'test-img';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Img
                    src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'}
                    testId={testImgId}
                />
            </ThemeProvider>
        );
        const img = getByTestId(testImgId);
        expect(img).toBeInTheDocument();
    });
});
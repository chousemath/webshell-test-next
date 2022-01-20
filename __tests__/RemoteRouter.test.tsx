import { render } from '@testing-library/react'
import RemoteRouter from '../components/organisms/RemoteRouter';

describe('Home', () => {
    it('renders a header', () => {
        const useRouter = jest.spyOn(require('next/router'), 'useRouter');
        const push = jest.fn();
        useRouter.mockImplementation(() => ({
            push,
            query: '',
            asPath: '',
            route: '/',
        }));
        const { getByTestId } = render(
            <RemoteRouter />
        );
        const footerButton0 = getByTestId('footer-button-0');
        const footerButton1 = getByTestId('footer-button-1');
        const footerButton2 = getByTestId('footer-button-2');
        const footerButton3 = getByTestId('footer-button-3');
        const footerButton4 = getByTestId('footer-button-4');

        footerButton0.click();
        footerButton1.click();
        footerButton2.click();
        footerButton3.click();
        footerButton4.click();
    });
});
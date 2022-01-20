import { render } from '@testing-library/react'
import { DetailTitle } from '../../../components/molecules';
import { ThemeProvider } from "@emotion/react";
import theme from '../../../styles/theme';

describe('Molecule::DetailTitle', () => {
    it('renders itself, and children', () => {
        const testDetailTitleId = 'test-detailtitle';
        const testChildId = 'test-child';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <DetailTitle testId={testDetailTitleId}>
                    <h1 data-testid={testChildId}>Hello!</h1>
                </DetailTitle>
            </ThemeProvider>
        );

        const detailTitle = getByTestId(testDetailTitleId);
        expect(detailTitle).toBeInTheDocument();

        const child = getByTestId(testChildId);
        expect(child).toBeInTheDocument();
    });
    it('renders itself, and children, and an upload button', () => {
        const testDetailTitleId = 'test-detailtitle';
        const testDetailTitleUploadButtonId = 'test-detailtitle-uploadbutton';
        const testChildId = 'test-child';
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <DetailTitle testId={testDetailTitleId} uploadBtn>
                    <h1 data-testid={testChildId}>Hello!</h1>
                </DetailTitle>
            </ThemeProvider>
        );

        const detailTitle = getByTestId(testDetailTitleId);
        expect(detailTitle).toBeInTheDocument();

        const child = getByTestId(testChildId);
        expect(child).toBeInTheDocument();

        const detailTitleUploadButton = getByTestId(testDetailTitleUploadButtonId);
        expect(detailTitleUploadButton).toBeInTheDocument();
    });
});
import styled from "@emotion/styled";
import { IProductDetailInfoData } from "../../../interfaces/IElements";
import { ITheme } from "../../../interfaces/ITheme";

interface IProps extends IProductDetailInfoData {
  price?: string;
}
export const ProductDetailPurchaseText: React.FC<IProps> = ({ price }) => {
  return (
    <Container>
      <div>즉시 구매가</div>
      <div>{price} 원</div>
    </Container>
  );
};

const Container = styled.div<ITheme>`
  width: 100%;
  display: flex;
  min-height: 45px;
  margin-bottom: 25px;

  & > div:nth-of-type(1) {
    width: 50%;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  & > div:nth-of-type(2) {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

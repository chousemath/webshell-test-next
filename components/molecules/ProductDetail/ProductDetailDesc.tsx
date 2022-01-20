import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import { IProductDetailInfoData } from "../../../interfaces/IElements";
interface IProps extends IProductDetailInfoData {
  brand?: string;
  modelNameEN?: string;
  modelNameKR?: string;
  sellerDesc?: string;
}
export const ProductDetailDesc: React.FC<IProps> = ({
  brand,
  modelNameEN,
  modelNameKR,
  sellerDesc,
}) => {
  return (
    <Container>
      <BrandName>{brand}</BrandName>
      <ModelNameEN>{modelNameEN}</ModelNameEN>
      <ModelNameKR>{modelNameKR}</ModelNameKR>
      <SellerDesc>{sellerDesc}</SellerDesc>
    </Container>
  );
};

const Container = styled.div`
  padding-right: 10%;
  width: 100%;
  margin-bottom: 20px;
`;

const BrandName = styled.h1<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  letter-spacing: -0.7px;
  margin-bottom: 10px;
`;

const ModelNameEN = styled.p<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 10px;
`;

const ModelNameKR = styled.p<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgb(218, 218, 218);
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: 20px;
`;

const SellerDesc = styled.p<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

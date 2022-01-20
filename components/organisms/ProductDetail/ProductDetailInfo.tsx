import { IProductDetailInfoData } from "../../../interfaces/IElements";
import {
  ProductDetailDesc,
  ProductDetailPurchaseBtn,
  ProductDetailPurchaseText,
} from "../../molecules";
export const ProductDetailInfo: React.FC<IProductDetailInfoData> = ({
  brand,
  modelNameEN,
  modelNameKR,
  sellerDesc,
  price,
}) => {
  return (
    <div>
      <ProductDetailDesc
        brand={brand}
        modelNameEN={modelNameEN}
        modelNameKR={modelNameKR}
        sellerDesc={sellerDesc}
      />
      <ProductDetailPurchaseBtn />
      <ProductDetailPurchaseText price={price} />
    </div>
  );
};

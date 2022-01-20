import { ReactNode } from "react";

export interface AccountButtonProps {
  btnName?: string;
  iconUrl?: string;
  bgColor?: string;
  color?: string;
  _onClick?: () => void;
}

export interface FormInputProps {
  id?: string;
  type?: string;
  labelText?: string;
  value?: string;
  placeholder?: string;
  className?: string;
}

export interface TradeButtonProps {
  isBuyButton: boolean;
  price?: string;
  _onClick?: () => void;
}

export interface InterestedItemProps {
  src?: string;
  width?: string;
  height?: string;
  count?: number;
  _onClick?: () => void;
}

export interface IDetailTitleProps {
  testId?: string;
  children?: ReactNode;
  isBold?: any;
  count?: number;
  uploadBtn?: boolean;
  _onClick?: () => void;
}

export interface IPhotoList {
  url: string;
}

export interface ISellInnerProps {
  id?: number;
  children?: string;
  _onClick?: (e: any) => void;
}

export interface ISellButtonProps {
  id?: number;
  type?: string;
  children?: string;
  isRightBtn?: boolean;
  isLeftBtn?: boolean;
  innerDatas?: Array<ISellInnerProps>;
  _onClick?: (e: any) => void;
}
export interface IBrandData {
  brandName: string;
}
export interface SellAlphabetLabelProps {
  alphabet: string;
}

export interface IProductDetailInfoData {
  productId?: number;
  brand?: string;
  modelNameEN?: string;
  modelNameKR?: string;
  sellerDesc?: string;
  price?: string;
}

export interface IProductDetailSellerData {
  userId: number;
  userName: string;
  userScore: number;
  userImage: string;
  _onClick?: () => void;
}

import { IDBModel } from './IDBModel';

export interface IProduct extends IDBModel {
  // bag-specific attributes
  itemWidth?: number;
  itemHeight?: number;
  itemDepth?: number;
  strapDropLow?: number;
  strapDropHigh?: number;
  exteriorColor?: string;
  interiorColor?: string;
  hardwareColor?: string;
  exteriorMaterialId?: string;
  interiorMaterialId?: string;
  accessories?: string[];
  // watch-specific attributes
  dialColorId?: string;
  bandColorId?: string;
  bandMaterialId?: string;
  caseMaterialId?: string;
  watchMovement?: string;
  caseWidth?: number;
  watchHeight?: number;
  bandWidth?: number;
  wristCircumference?: number;
  // jewelry-specific attributes
  hallmarkType?: string[];
  metalTypeId?: string;
  nonGemMaterialId?: string;
  metalFinish?: number;
  hallmarkLocation?: number;
  signature?: string;
  totalItemWeight?: number;
  itemLengthLow?: number;
  itemLengthHigh?: number;
  pendantLength?: number;
  pendantWidth?: number;
  fastDelivery?: boolean;
  hasWaterResitance?: boolean;
  hasCertificate?: boolean;
  serialNumber?: string;
  itemNumber?: string;
  brandCode?: string;
  retailPrice?: number;
  salesPrice?: number;
  name?: string;
  profileImage?: string;
  detailImages?: string[];
  categoryId?: string;
  category?: string;
  designerId?: string;
  designer?: string;
  conditionId?: string;
  condition?: string;
  styleId?: string;
  style?: string;
  storeId?: string;
  store?: string;
  collectionId?: string;
  collection?: string;
  likeCount?: number;
  commentCount?: number;
  soldCount?: number;
  hasWaterResistance?: boolean;
}

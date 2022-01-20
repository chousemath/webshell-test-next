import {IDBModel} from './IDBModel';

export interface IFavorite extends IDBModel {
  userId: string;
  productId: string;
}

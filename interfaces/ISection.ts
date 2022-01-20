import { IDBModel } from './IDBModel';
import { IProduct } from './IProduct';

export interface ISection extends IDBModel {
    title: string;
    subtitle: string;
    products: IProduct[];
}

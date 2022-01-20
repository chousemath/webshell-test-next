import { IDBModel } from "./IDBModel";
import { IProduct } from "./IProduct";

export enum Gender {
  Male = 1,
  Female = 2,
}

export interface IUser extends IDBModel {
  gender?: Gender;
  name?: string;
  email?: string;
  password?: string;
  favorites?: IProduct[];
}

// 추가
export interface IUserImg {
  className?: string;
  width: string;
  height: string;
  src: string;
  userName?: string;
}

export interface IUserInfo {
  userId: string;
  userEmail?: string;
  buttons?: any;
  message?: string;
}

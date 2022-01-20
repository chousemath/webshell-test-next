export interface IProductCard {
  data?: any;
  className?: string;
  url?: string;
  title?: string;
  subTitle?: string;
  desc?: string;
  price?: string | number;
  text?: string;
  express_mark?: boolean;
  interest?: boolean;
  _onClick?: () => void;
}
export interface IStyleCard {
  className?: string;
  url: string;
  profileUrl: string;
  userName: string;
}

export interface IProducTitle {
  title?: string;
  subTitle?: string;
}

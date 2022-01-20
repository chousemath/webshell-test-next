export interface IDBModel {
  id?: string;
  _page?: number;
  _limit?: number;
}

export const toQueryString = (dbModel: IDBModel): string => {
  let qstring = '';
  for (const [key, val] of Object.entries(dbModel)) {
    qstring += qstring ? `&${key}=${val}` : `?${key}=${val}`;
  }
  return qstring;
};

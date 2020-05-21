import { PK } from "@mcf/crud";

export interface IModel {
  id: number;
  name: string;
  title: string;
}

export interface IAction {
  fetchItem(params: any): void;
}

export interface IReducer {
  getReducer(): void;
}

export interface IApi {
  fetchList(params: any): void;
  fetchItem(params: any): void;
  fetchSave(params: any): void;
  fetchUpdate(params: any): void;
  fetchDelete(arg0: PK[]): void;
}

export interface IReducerState {
  page: {
    pageSize: number;
    total: number;
  };
}

export interface ICarReducer extends IReducer {
  saveItem(params: any): Object;
  savePage(items: any): Object;
}

export interface ICarAction extends IAction {
  stop(payload: { a: string; b: number }): void;
  fetchPage(params: any): void;
  fetchDelete(ids: PK[]): void;
  fetchItem(params: any): void;
  fetchSave(params: any): void;
  fetchUpdate(params: any): void;
}

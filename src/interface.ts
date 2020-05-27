import { PK } from "@mcf/crud";

export interface IModel{
  groupId: number;
  dbType: string;
  groupName: string;
  createTime: string;
}

export interface IAction {
  fetchItem(rowkeys:PK): void;
  fetchDelete(rowkeys:any): void;
  fetchPage(rowkeys:any): void;
  fetchSave(rowkeys:any): void;
}

export interface IReducer{
  savePage(payload:any):void;
  saveItem(payload:any):void;
  deleteItem(payload:any):void;
}

export interface IApi{
  fetchList(params:any):void;
  fetchItem(params:any):void;
  fetchSave(params:any):void;
  fetchUpdate(params:any):void;
  fetchDelete(params:any):void;
}

export interface IReducerState{
  page:{
    pageSize:number,
    total:number
  }
}

export interface ICarReducer extends IReducer {
  saveItem(payload:any):Object;
  savePage(payload:any):Object;
  deleteItem(payload:any):Object;
}

export interface ICarAction extends IAction {
  fetchPage(params:any):void;
  fetchDelete(ids:PK):void;
  fetchSave(values:any):void;
  fetchItem(id:PK):void;
}


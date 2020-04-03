interface IAction{

}

interface IReducer{
  getReducer():void
}

export interface IApi{
  fetchList(params:any):void;
  fetchItem(params:any):void;
  fetchSave(params:any):void;
  fetchUpdate(params:any):void;
  fetchDelete(params:any):void;
}

export interface ICarReducer extends IReducer {
  saveItem():Object
}

export interface ICarAction extends IAction {
  stop(payload:{ a: string, b: number }):void;
  fetchPage():void;
}


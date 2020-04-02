interface IAction {
  fetchItem();
}

interface IReducer{
  getReducer()
}

export interface IApi{
  fetchList(params:any);
  fetchItem(params:any);
  fetchSave(params:any);
  fetchUpdate(params:any);
  fetchDelete(params:any);
}

export interface ICarReducer extends IReducer {
  saveItem()
}

export interface ICarAction extends IAction {
  stop({ a: string, b: number });
  fetchPage();
}


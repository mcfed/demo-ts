import { ICarReducer, IReducerState } from "./interface";

export default class CarReducer implements ICarReducer {
  private initalState: IReducerState = {
    page:{
      pageSize:10,
      total:0
    }
  };
  savePage(payload:any){
    const pageSize= payload.pageSize|| payload.end+1-payload.start
    return {
      page:{
        total:payload.totalCount ||payload.total,
        pageSize,
        current:payload.currentPage || Math.ceil((payload.start+1)/pageSize)
      }
    }
  }
  saveItem(payload:any) {
    return {
      item:payload
    }
  }
  deleteItem(payload:any){
    return {
      item:{}
    }
  }
}

import { ICarReducer, IReducerState } from "./interface";

export default class CarReducer implements ICarReducer {
  private initalState: IReducerState = {
    page:{
      pageSize:10,
      total:0
    },
    items:[]
  };
  saveItem() {
    return "sss";
  }
  getReducer() {}
  savePage(payload:{items:any}){
    return {
      items:payload.items
    }
  }
}

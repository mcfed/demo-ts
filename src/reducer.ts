import { ICarReducer, IReducerState } from "./interface";

export default class CarReducer implements ICarReducer {
  private initalState: IReducerState = {
    page:{
      pageSize:10,
      total:0
    }
  };
  saveItem() {
    return {}
  }
  saveList(data:any) {
  
    return{
    
    }
  }
  getReducer() {}
}

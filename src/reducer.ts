import { ICarReducer, IReducerState } from "./interface";

export default class CarReducer implements ICarReducer {
  [x: string]: any;
  private initalState: IReducerState = {
    page: {
      pageSize: 10,
      total: 0,
    },
  };
  saveItem(params: any): Object {
    return {};
  }
  savePage(data: any) {
    return {
      page: data.page,
    };
  }
  getReducer() {}
}

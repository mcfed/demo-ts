import { BaseReducer } from "./base";
import { IReducerState } from "./interface";
export default class CarReducer extends BaseReducer {
  private initalState: IReducerState = {
    page: {
      pageSize: 10,
      total: 0,
    },
  };

  getReducer() {}
}

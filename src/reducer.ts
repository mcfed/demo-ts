import { ICarReducer, IReducerState } from "./interface";
import {ResponsePage} from './api';

export default class CarReducer implements ICarReducer {
  private initalState: IReducerState = {
    page:{
      pageSize:10,
      total:0
    }
  };
  saveItem() {
    return "sss";
  }
  getReducer() {}

  savePage(payload:ResponsePage,state?: IReducerState,): IReducerState {
    return {
      page: {
        pageSize: payload.pageSize,
        current: payload.currentPage,
        total: payload.total
      }
    }
  }
}

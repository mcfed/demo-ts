import { ICarReducer, IReducerState } from "./interface";

export default class CarReducer implements ICarReducer {
  private initalState: IReducerState = {
    page: {
      pageSize: 10,
      total: 0,
    },
  };
  getReducer() {}
  /**
   * fetchPage list
   * @param payload
   */
  /**
   * 保存list页面分页信息容错
   */
  savePage(payload:any) {
    const pageSize = payload.pageSize || payload.end + 1 - payload.start;
    return {
      page: {
        total: payload.totalCount || payload.total,
        pageSize,
        current:
          payload.currentPage || Math.ceil((payload.start + 1) / pageSize),
      },
    };
  }

  /**
   *  保存list页面分页信息
   */
  saveList({ payload }: any) {
    return {
      // items:payload.items,
      page: {
        total: payload.totalCount,
        current: payload.currentPage,
      },
    };
  }

  /**
   * 保存item
   */
    saveItem(payload:any) {
      return {}
    }
}

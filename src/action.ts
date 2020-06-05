import { InjectFactory,Middleware,Decorator } from "@mcf/core";
import { PK } from "@mcf/crud";
import Api from "./api";
import Reducer from "./reducer";
import { BaseAction } from "./base";
import { other, param, loading } from './decorator'

// const { param, loading }  = Decorator;
const { Injectable } = InjectFactory;

const { MiddlewareFactory } = Middleware;

@Injectable
class CarAction extends BaseAction{
  //@ts-ignore
  constructor(public readonly reducer: Reducer, public readonly api: Api, public middleware: MiddlewareFactory) {
    super(reducer,api,middleware)
  }

  @loading()
  @param()
  // @other()
  async fetchPage(params:any) {
    // return Promise.resolve()
    const data = await this.api.fetchList(params);
    // console.log(this.fetchPage.toString())
    if(data && data.code === 0){
      this.reducer.savePage(data.data)
      this.middleware.showSuccess('请求成功！')
    }else{
      this.middleware.showError('请求失败！')
    }
    this.middleware.showError(this.fetchPages.bind(this))
  }

  // @loading()
  async fetchPages(parmas:any) {
    return parmas
  }

}

export { CarAction };

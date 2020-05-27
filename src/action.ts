import { InjectFactory,Middleware } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";
import { param, loading } from './decorator'

const { Injectable } = InjectFactory;
const {MiddlewareFactory} =Middleware

@Injectable
class CarAction implements ICarAction {
  //@ts-ignore
  constructor(public readonly reducer: Reducer, public readonly api: Api, public middleware: MiddlewareFactory) {}

  async fetchDelete(ids: PK) {
    const data = await this.api.fetchDelete({id:ids});
   
    if(data && data.code === 0){
      console.log(this.reducer)
      // this.fetchPage(this.params)
      this.middleware.showSuccess('请求成功！')
    }else{
      this.middleware.showError('请求失败！')
    }
  }

  stop(payload: { a: string; b: number }) {
    console.log("stop", payload.a, payload.b);
  }


  async fetchItem(id:number) {
    const data = await this.api.fetchItem(id);
    if(data && data.code === 0){
      this.reducer.saveItem(data.data)
      this.middleware.showSuccess('请求成功！')
    }else{
      this.middleware.showError('请求失败！')
    }
  }


  @loading()
  @param()
  async fetchPage(params:any) {
    const data = await this.api.fetchList(params);
    if(data && data.code === 0){
      this.reducer.savePage(data.data)
      this.middleware.showSuccess('请求成功！')
    }else{
      this.middleware.showError('请求失败！')
    }
  }

  async fetchSave(params:any) {
    const data = await this.api.fetchSave(params);
    if(data && data.code === 0){
      this.middleware.showSuccess('请求成功！')
    }else{
      this.middleware.showError('请求失败！')
    }
  }

  async fetchUpdate(params:any) {
    const data = await this.api.fetchUpdate(params);
    if(data && data.code === 0){
      this.middleware.showSuccess('请求成功！')
    }else{
      this.middleware.showError('请求失败！')
    }
  }
}

export { CarAction };

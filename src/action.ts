import { InjectFactory } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";
import {message} from 'antd'

const { Injectable } = InjectFactory;

@Injectable
class CarAction implements ICarAction {
  constructor(public readonly reducer: Reducer, public readonly api: Api, public middleware: any) {}

  async fetchDelete(ids: PK) {
    const data = await this.api.fetchDelete({id:ids});
    if(data && data.code === 0){
      // this.fetchPage(this.params)
      message.success('请求成功！')
    }else{
      message.error('请求失败！')
    }
  }

  stop(payload: { a: string; b: number }) {
    console.log("stop", payload.a, payload.b);
  }

  async fetchItem(id:number) {
    const data = await this.api.fetchItem(id);
    if(data && data.code === 0){
      this.reducer.saveItem({payload:data})
      message.success('请求成功！')
    }else{
      message.error('请求失败！')
    }
  }

  async fetchPage(params:any) {
    const data = await this.api.fetchList(params);
    // this.params = params;
    if(data && data.code === 0){
      this.reducer.savePage(data.data)
      message.success('请求成功！')
    }else{
      message.error('请求失败！')
    }
  }

  async fetchSave(params:any) {
    const data = await this.api.fetchSave(params);
    if(data && data.code === 0){
      this.reducer.saveItem({payload:data})
      message.success('请求成功！')
    }else{
      message.error('请求失败！')
    }
  }

  async fetchUpdate(params:any) {
    const data = await this.api.fetchUpdate(params);
    if(data && data.code === 0){
      this.reducer.saveItem({payload:data})
      message.success('请求成功！')
    }else{
      message.error('请求失败！')
    }
  }
}

export { CarAction };

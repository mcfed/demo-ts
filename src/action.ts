import { InjectFactory } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";
import {message} from 'antd'
import {showError,showSuccess} from './redux-message'

const { Injectable } = InjectFactory;

// const api = new Api();
// const reducer = new Reducer();

@Injectable
class CarAction implements ICarAction {
  constructor(public readonly reducer: Reducer, public readonly api: Api) {}
  async fetchDelete(ids: PK) {
    const data = await this.api.fetchDelete({id:ids});
    if(data && data.code === 0){
      showSuccess('请求成功！')
    }else{
      showError('请求失败！')
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


  async fetchPage() {
    const data = await this.api.fetchList();
    if(data && data.code === 0){
      console.log(this)
      this.reducer.savePage({payload:data})
      showSuccess('请求成功！')
    }else{
      showError('请求失败！')
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
}

export { CarAction };

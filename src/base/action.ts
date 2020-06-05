import { param, loading } from "../decorator";
import { PK } from "@mcf/crud";
import { Decorator } from "@mcf/core";

// const { param, loading } = Decorator;

export default class BaseAction {
  // reducer:any;
  // api:any;
  // middleware:any;
  // constructor(...args: any[]) {}
  constructor(public readonly reducer: any, public readonly api: any, public middleware: any) {}

  // @param()
  // @loading()
  async fetchPage(params: any) {
    const data = await this.api.fetchList(params);
    if (data && data.code === 0) {
      this.reducer.savePage(data.data);
      this.middleware.showSuccess("请求成功！");
    } else {
      this.middleware.showError("请求失败！");
    }
  }

  async fetchItem(id:PK) {
    const data = await this.api.fetchItem(id);
    if(data && data.code === 0){
      this.reducer.saveItem(data.data)
      this.middleware.showSuccess('请求成功！')
    }else{
      this.middleware.showError('请求失败！')
    }
  }

  async fetchDelete(ids: PK) {
    const data = await this.api.fetchDelete({id:ids});
    if(data && data.code === 0){
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

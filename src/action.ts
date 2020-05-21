import { InjectFactory } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";
import message from "antd/es/message";

const { Injectable } = InjectFactory;
const defaultSuccessText = "操作成功";

@Injectable
class CarAction implements ICarAction {
  constructor(public readonly reducer: Reducer, public readonly api: Api) {}
  stop(payload: { a: string; b: number }) {
    console.log("stop", payload.a, payload.b);
  }
  async fetchDelete(ids: PK[]) {
    const result = await this.api.fetchDelete({ ids });
    if (result.code === 0) {
      message.success(defaultSuccessText);
      this.fetchPage();
    } else {
      message.error(result.message);
    }
  }
  async fetchItem(params: any) {
    const result = await this.api.fetchItem(params);
    if (result.code === 0) {
      this.reducer.saveItem(result.data);
    } else {
      message.error(result.message);
    }
  }
  async fetchPage(params?: any) {
    const result = await this.api.fetchList(params);
    console.log(this);
    if (result.code === 0) {
      this.reducer.savePage(result.data);
    } else {
      message.error(result.message);
    }
  }
  async fetchSave(params: any) {
    const result = await this.api.fetchSave(params);
    if (result.code === 0) {
      this.reducer.saveItem(result.data);
      message.success(defaultSuccessText);
    } else {
      message.error(result.message);
    }
  }
  async fetchUpdate(params: any) {
    const result = await this.api.fetchUpdate(params);
    if (result.code === 0) {
      this.reducer.saveItem(result.data);
      message.success(defaultSuccessText);
    } else {
      message.error(result.message);
    }
  }
}

export { CarAction };

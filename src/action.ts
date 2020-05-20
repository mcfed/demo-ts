import { InjectFactory } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";

const { Injectable } = InjectFactory;

@Injectable
class CarAction implements ICarAction {
  constructor(public readonly reducer: Reducer, public readonly api: Api) {}
  fetchDelete(ids: PK): void {
    throw new Error("Method not implemented.");
  }
  stop(payload: { a: string; b: number }) {
    console.log("stop", payload.a, payload.b);
  }
  async fetchItem() {
    console.log("fetchItem");
    const result = await this.api.fetchItem({});
    if (result.code === 0) {
      // this.reducer.saveItem(result.data);
      console.log("ok")
    }else{
      console.log("error")
    }  
  }
  async fetchPage() {    
    console.log("fetchPage");
    const result = await this.api.fetchList({aa:"a"});
    if (result.code === 0) {
      this.reducer.savePage(result.data);
      console.log("ok")
    }else{
      console.log("error")
    }
  }
}

export { CarAction };

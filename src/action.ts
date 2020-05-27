import { InjectFactory } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";

const { Injectable } = InjectFactory;

@Injectable
class CarAction implements ICarAction {
  constructor(public readonly reducer: Reducer, public readonly api: Api) {}
  fetchDelete(ids: PK | PK[]): void {
    throw new Error("Method not implemented.");
  }
  stop(payload: { a: string; b: number }) {
    console.log("stop", payload.a, payload.b);
  }
  async fetchItem(params:number) {
    this.api.fetchItem(params)
  }
  async fetchPage(params:any) {
    const result = await this.api.fetchList(params)
    this.reducer.savePage(result.data);
  }
  async fetchSaveOrUpdate(params:any){
    if(params.id){
      console.log("edit",params.id)
      this.api.fetchUpdate(params)
    }else{
      console.log("add",params)
      this.api.fetchSave(params)

    }
    console.log(params)
  }
}

export { CarAction };

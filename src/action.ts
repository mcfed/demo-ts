import { InjectFactory } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";
import { F_OK } from "constants";

const { Injectable } = InjectFactory;

@Injectable
class CarAction implements ICarAction {
  constructor(public readonly reducer: Reducer, public readonly api: Api) {}
  async fetchDelete(ids:PK) {
    const result = await this.api.fetchDelete(ids);
    if (result.code === 0) {
      this.reducer.deleteItem(result.data);
      console.log("ok")
    }else{
      console.log("error")
    }  
  }
  async fetchItem(id:PK) {
    const result = await this.api.fetchItem(id);
    if (result.code === 0) {
      this.reducer.saveItem(result.data);
      console.log("ok")
    }else{
      console.log("error")
    }  
  }
  async fetchPage(params:any) {    
    const result = await this.api.fetchList(params);
    if (result.code === 0) {
      this.reducer.savePage(result.data);
      console.log(" fetchPage ok ")
    }else{
      console.log(" fetchPage error ")
    }
  }
  async fetchSave(values:object){
    const result = await this.api.fetchSave(values);
    if(result.code === 0){
      console.log(" fetchSave ok ")
    }else{
      console.log(" fetchSave error")
    }
  }
}

export { CarAction };

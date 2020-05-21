import { InjectFactory } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";
import Middleware from "./middleware"; 

//import { passportMiddleware } from "@mcf/core/dist/middleware";
//import * as effects from 'redux-saga/effects'

const { Injectable } = InjectFactory;

function counter(state = 0, action:any) {
  switch (action) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

@Injectable
class CarAction implements ICarAction {
  constructor(public readonly reducer: Reducer, public readonly api: Api,public readonly middlewares:Middleware) {}
  fetchDelete(ids: PK): void {
    throw new Error("Method not implemented.");
  }
  stop(payload: { a: string; b: number }) {
    console.log("stop", payload.a, payload.b);
  }
  fetchItem() {
    throw new Error("Method not implemented.");
  }
  async fetchPage() {
    //const aa=new Reducer2()
    console.log(1,this.middlewares.createPassport(),this.reducer,this.api)
    this.middlewares.createPassport()
    this.middlewares.globalMiddlware()
   // this.middlewares.passportMiddleware.upgradeDict()
    // const aa= new Api()
    // const bb= new Reducer()
    const result = await this.api.fetchList({})
    //this.reducer.saveList(result.data)
    // console.log(11,aa.fetchList,bb.saveItem(),bb.saveList(result))
    // console.log("fetchPage",result);
    //return result
  }
}

export { CarAction };

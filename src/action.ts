import { InjectFactory,Middleware } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";
//import Middleware from "./middleware"; 
//import * as effects from 'redux-saga/effects'
//@ts-ignore
const {MiddlewareFactory} =Middleware

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
  //@ts-ignore
  constructor(public readonly reducer: Reducer, public readonly api: Api,public readonly middlewares:MiddlewareFactory) {}
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
    //@ts-ignore
    //console.log(1,this.middlewares.fetchLogining(),this.middlewares.fetchLogouting(),this.reducer,this.api,this.middlewares)
    // const aa= new Api()
    // const bb= new Reducer()
    const result = await this.api.fetchList({})
    //this.reducer.saveList(result.data)
    // console.log(11,aa.fetchList,bb.saveItem(),bb.saveList(result))
     console.log("this.middlewares",this.middlewares,this,this.middlewares.FETCH_PARAMS2({a:'ss'}));
    //return result
  }
}

export { CarAction };

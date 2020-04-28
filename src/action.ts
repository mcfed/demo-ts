import { InjectFactory } from "@mcf/core";
import { ICarAction } from 'interface';
import Api from './api'
import Reducer from "./reducer";
import { PK } from "@mcf/crud";

const {Injectable} = InjectFactory;


@Injectable
class CarAction implements ICarAction {
  constructor(public readonly reducer: Reducer, public readonly api: Api) {
  }
  fetchDelete(ids: PK): void {
    throw new Error("Method not implemented.");
  }
  stop(payload:{ a: string, b: number }) {
    console.log("stop",payload.a,payload.b);
  }
  fetchItem(){

  }
  fetchPage() {
    console.log("fetchPage");
  }
}
/*
@Injectable
class CarAction extends BaseAction implements ICarAction {
  constructor(public reducer: Reducer, public api: Api) {
    super();
  }
  stop(payload:{ a: string, b: number }) {
    console.log("stop",payload.a,payload.b);
  }
  fetchPage() {
    console.log("fetchPage");
  }
}
*/

export{ CarAction}

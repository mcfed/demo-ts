import "reflect-metadata"
import Api from './api'
import Reducer from "./reducer";
import { InjectFactory } from "@mcf/core";

const {Injectable} = InjectFactory;

export interface ICarAction extends IAction{
  stop(payload:{a:string,b:number}):void
  fetchPage():void
}

interface IAction{
  fetchItem():void
}

class BaseAction implements IAction{
  fetchItem(){

  }
}

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

export{ CarAction}

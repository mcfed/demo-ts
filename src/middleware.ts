//import { ICarReducer, IReducerState } from "./interface";
//import createPassport from "./ss";
import createPassport from "@mcf/core/dist/middleware/redux-passport";
import globalMiddlware from "@mcf/core/dist/middleware/redux-module";
//import {store} from '../app'
//const { dispatch } = store;
export default class CarReducer {
  createPassport() {
    return createPassport({})
  }
  globalMiddlware(){
    return globalMiddlware()
  }
}

import { StoreManager } from "@mcf/core"; 
import { createLogger } from "redux-logger";
import { createHashHistory } from "history";
import {combineReducers} from 'redux'
import * as DemoModule from "./src/";
function markRootReducer(asyncReducers){
    return combineReducers({
        ...asyncReducers,
    })
  } 
export const store = new StoreManager(
    createHashHistory(),
    //@ts-ignore
    new DemoModule.reducer().getReducer(),
    //@ts-ignore
    //[createLogger(),createLogger2(store0.store)], //, getReducer2(store0.store)
    [createLogger()],
    markRootReducer
   // middleware:{
     // a:{'',''}
      //...passportMiddleware,
      //...fetchingMiddleware
  
   // }
  );
  var injectMiddleware = async function(store){
    const module = require('./src');
    const importModule = new Promise((resolve, rejects) => resolve(module));
    await store.importRouterModule(importModule)
  }
  injectMiddleware(store)

  //export injectMiddleware


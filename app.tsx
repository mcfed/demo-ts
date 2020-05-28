import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { createLogger } from "redux-logger";
import { AppContainer } from "react-hot-loader";
import { StoreManager, Middleware,InjectFactory } from "@mcf/core"; 
import {store} from './store'
//import  StoreManager  from "./src/core/store";
import * as DemoModule from "./src/";

//import {ActionFactory2} from './src/ActionFactory2'
//import createPassport from "./src/ss";
import createPassport from "@mcf/core/dist/middleware/redux-passport";

import {combineReducers} from 'redux'

const { Injectable } = InjectFactory;



// const middleware={
//   a:function(payload){
//     console.log(55,payload)
//     return {
//       type:'aaa/bb',
//       payload:payload
//     }
//   }
// }

function aaa(state = [], action) {
  switch (action) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
function counter(state = 0, action) {
  switch (action) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}


function fetchLogining(payload: any) {
  const FETCH_LOGINING = '@@MIDDLEWARE/FETCH_LOGINING';
  return {
    type: FETCH_LOGINING,
    payload: payload
  };
}

function markRootReducer(asyncReducers){
  const aa=combineReducers({
   // fetchLogining,
    ...asyncReducers,
   // counter,
  //  aaa,
   // fetchLogining,
  })
  //console.log(21,asyncReducers,counter,aa)
  return aa
} 
function getReducer() {}
function getReducer2(store:any) {
  return function a(next:any){
    return function b(action:any){
      //let result = next(action)
      //const disp=next.dispatch
      console.log('dispatchingcccccccccccccc',store.getState(),action,next,next.dispatch)
     // return store.getState().fetchingReducer
      //return store.getState()
     // return next.dispatch
    }
  }
}
//@ts-ignore
//const store0 = new StoreManager(createHashHistory(), new getReducer(), [], markRootReducer);
//const rootReducer = combineReducers({ fetchingReducer:aaa})
// const store = new StoreManager(
//   createHashHistory(),
//   //@ts-ignore
//   new DemoModule.reducer().getReducer(),
//   //@ts-ignore
//   //[createLogger(),createLogger2(store0.store)], //, getReducer2(store0.store)
//   [createLogger()],
//   markRootReducer
//  // middleware:{
//    // a:{'',''}
//     //...passportMiddleware,
//     //...fetchingMiddleware

//  // }
// );
// var injectMiddleware = async function(store){
//   const module = require('./src/passport');
//   const importModule = new Promise((resolve, rejects) => resolve(module));
//   await store.importModule(importModule)
// }
// injectMiddleware(store)
console.log(788,store,store.getStore().getState())

//console.log(11,createLogger(),store)

// class Api {
//   fetch() {
//     console.log('fetch');
//   }
// }
// class Reducer{
//   fetch2() {
//     console.log('fetch2');
//   }
// }
// class Middleware2{
//   fetch3() {
//     console.log('fetch3');
//   }
//   createPassport(){}
// }
// @Injectable
// class Action {
//   constructor(public readonly reducer: Reducer, public readonly api: Api,public readonly middlewares:Middleware2) {}
//   fetchAction() {
//     this.api.fetch();
//   }
// }

// const { dispatch } = store;
// var middlewareB={
//   a:function(payload){
//     console.log(44,payload)
//     dispatch(middleware.a)
//   }
// }



const App = () => (
  <Provider store={store.getStore()}>
    <IntlProvider locale="zh-CN" onError={function(err) {}}>
    <Router>
      <Switch>
        //@ts-ignore
        <Route path="/" component={store.loadRouterModule(DemoModule)}></Route>
      </Switch>
    </Router>
    </IntlProvider>
  </Provider>
);

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);
// //@ts-ignore
// if (module.hot) {
// //@ts-ignore
//   module.hot.accept(() => {
//     render(App);
//   });
// }

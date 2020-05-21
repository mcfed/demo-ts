import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { createLogger } from "redux-logger";
import { AppContainer } from "react-hot-loader";
import { StoreManager } from "@mcf/core";
import * as DemoModule from "./src/";
//import createPassport from "./src/ss";
//import createPassport from "@mcf/core/dist/middleware/redux-passport";
import { passportMiddleware } from "@mcf/core/dist/middleware";
import {combineReducers} from 'redux'

const persistConfig = {
  key: 'root',
  //storage,
  whitelist: ['loggedUserState'],
};


// const storeManager = new StoreManager(createBrowserHistory(),{
//   loggedUserState: loggedUserReducer,
//   changePhoneState: changePhoneReducer
//   },
//   [createLogger()],
//   markRootReducer
// )

const middleware={
  a:function(payload){
    console.log(55,payload)
    return {
      type:'aaa/bb',
      payload:payload
    }
  }
}

function aaa(state = [], action) {
  switch (action) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
  //return aaa
}
//console.log(88,typeof aaa)
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

function markRootReducer(asyncReducers){
 // console.log(21,asyncReducers,counter)
  return combineReducers({
      ...asyncReducers,
      counter,
      aaa,
      passportMiddleware
    })
}
const rootReducer = combineReducers({ fetchingReducer:aaa})
export const store = new StoreManager(
  createHashHistory(),
  //@ts-ignore
  new DemoModule.reducer().getReducer(),
  [createLogger()], //,createPassport({})
  markRootReducer
 // middleware:{
   // a:{'',''}
    //...passportMiddleware,
    //...fetchingMiddleware

 // }
);


const { dispatch } = store;
var middlewareB={
  a:function(payload){
    console.log(44,payload)
    dispatch(middleware.a)
  }
}



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

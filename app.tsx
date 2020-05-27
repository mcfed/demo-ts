import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { createLogger } from "redux-logger";
import { AppContainer } from "react-hot-loader";
import { StoreManager } from "@mcf/core";
import {message} from 'antd'
import * as DemoModule from "./src/";
import createMessage from './src/redux-message'


const messageMiddleware = createMessage({
  success:function(msg){
    message.success(msg)
  },
  error:function(msg){
    message.error(msg)
  },
  comfirm:function(){
    
  },
  message:function(){

  }
})


const store = new StoreManager(
  createHashHistory(),
  //@ts-ignore
  new DemoModule.reducer().getReducer(),
  [createLogger(),messageMiddleware]
);

const App = () => (
  <Provider store={store.getStore()}>
    <IntlProvider locale="zh-CN" onError={function(err) {}}>
    <Router>
      <Switch>
        <Route path="/Abcd" component={store.loadRouterModule(DemoModule)}></Route>
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

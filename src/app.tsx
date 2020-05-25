import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { createLogger } from "redux-logger";
import { AppContainer } from "react-hot-loader";
import { StoreManager } from "@mcf/core";
import * as DemoModule from "./";

import 'antd/dist/antd.css'

const store = new StoreManager(
  createHashHistory(),
  //@ts-ignore
  new DemoModule.reducer().getReducer(),
  [createLogger()]
);

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

//@ts-ignore
global.API_PREFIX="/"


// serviceWorker.unregister();

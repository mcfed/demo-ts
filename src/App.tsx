import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
//@ts-ignore
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { IntlProvider } from "react-intl";
//@ts-ignore
import { createLogger } from 'redux-logger';
import { AppContainer } from 'react-hot-loader';
import * as Module from './index';
//@ts-ignore
// import * as  TongfangModule from '@capaa/tongfang'

import "antd/dist/antd.css"

import {StoreManager} from "@mcf/core";



const store = new StoreManager(
  createHashHistory(),
  //@ts-ignore
  new Module.reducer().getReducer(),[createLogger()]
);

console.log();

const App = () => (
  <Provider store={store.getStore()}>
    <IntlProvider locale="zh-CN" onError={function(err) {}}>
      <Router>
        <Switch>
          <Route
            path="/tongfang"
            render={props => store.importModule("@capaa/tongfang")(props)}
          ></Route>
          <Route path="/" component={store.loadClassModule(Module)}></Route>
        </Switch>
      </Router>
    </IntlProvider>
  </Provider>
);

const render = (Component:any) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// if (module.hot) {
//   module.hot.accept(() => {
//     render(App);
//   });
// }

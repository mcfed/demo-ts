import { injectIntl, defineMessages } from "react-intl";
import { connect } from "react-redux";
import React from 'react'
import { Selector, Container, InjectFactory,Middleware } from "@mcf/core";
import {ActionFactory2} from './ActionFactory2'
import { CarAction } from "./action";
import ListView from "./views/List.view";
import FormView from "./views/Form.view";
import DetailView from "./views/Detail.view";
import messages from "./locales";
import { namespace } from "./model";
import { Dispatch } from "redux";

const { defaultMergeProps } = Container;
const { reducerItemSelector, reducerListSelector, fetchingSelector,reducerSelector,appSelector } = Selector;

export const mapStateToProps = (state: any, props: any) => {
  return {
    intl: props.intl,
    messages: defineMessages(messages),
    //...containerSelector(state, namespace, props.match.params.id)
    appReducer: appSelector(state),
    fetchingReducer: fetchingSelector(state),
    reducer: reducerSelector(state, namespace),
    items: reducerListSelector(state, namespace),
    item: reducerItemSelector(state, namespace, props.match.params.id),
  };
};

export const dispatchToProps = (dispatch: Dispatch, props: object) => {
  console.log('props',props)
  return {
    dispatch,
    //@ts-ignore
    //actions:props.route.actions
    // actions: ActionFactory2(CarAction, dispatch, namespace,    {
    //   fetchLogining:()=>dispatch(Middleware.passportMiddleware.fetchLogining({})),
    //   fetchLogouting:()=>dispatch(Middleware.passportMiddleware.fetchLogouting({}))
    // }),
    actions: InjectFactory.ActionFactory(CarAction, dispatch, namespace),
  };
};
export const ListContainer = injectIntl(
  //@ts-ignore
  connect(mapStateToProps, dispatchToProps, defaultMergeProps)(ListView)
);

export const FormContainer = injectIntl(
    //@ts-ignore
  connect(mapStateToProps, dispatchToProps, defaultMergeProps)(FormView)
);
export const DetailContainer = injectIntl(
    //@ts-ignore
  connect(mapStateToProps, dispatchToProps, defaultMergeProps)(DetailView)
);

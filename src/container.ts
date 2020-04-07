import { Selector, Container,InjectFactory } from "@mcf/core";
import { CarAction } from "./action";
// import FormView from "./views/Form.view";
import ListView from "./views/List.view";
// import DetailView from "./views/Detail.view";
import messages from "./locales";
import { namespace } from "./model";
import { injectIntl } from "react-intl";
import {connect} from 'react-redux'

const { defaultMergeProps } = Container;
const { reducerItemSelector, reducerListSelector } = Selector;

export const mapStateToProps = (state:any, props:any) => {
  return {
    actions: InjectFactory.Factory(CarAction),
    appReducer: state.appReducer,
    fetchingReducer: state.fetchingReducer,
    reducer: state[namespace],
    messages: messages,
    items: reducerListSelector(state.ORMReducer, namespace),
    item: reducerItemSelector(
      state.ORMReducer,
      namespace,
      props.match.params.id
    ),
  };
};

export const ListContainer = injectIntl(
  connect(mapStateToProps, null, defaultMergeProps)(ListView)
);

// export const ListContainer = containerFactory(mapStateToProps)(ListView);
//@ts-ignore
// export const DetailContainer = connectContainer(mapStateToProps)(DetailView);

import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { Selector, Container, InjectFactory } from "@mcf/core";
import { CarAction } from "./action";
import ListView from "./views/List.view";
import FormView from "./views/Form.view";
import DetailView from "./views/Detail.view";
import messages from "./locales";
import { namespace } from "./model";

const { defaultMergeProps } = Container;
const { reducerItemSelector, reducerListSelector } = Selector;

export const mapStateToProps = (state: any, props: any) => {
  return {
    intl: props.intl,
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
  //@ts-ignore
  connect(mapStateToProps, null, defaultMergeProps)(ListView)
);

export const FormContainer = injectIntl(
  //@ts-ignore
  connect(mapStateToProps, null, defaultMergeProps)(FormView)
);
export const DetailContainer = injectIntl(
  //@ts-ignore
  connect(mapStateToProps, null, defaultMergeProps)(DetailView)
);

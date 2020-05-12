import { injectIntl, defineMessages } from "react-intl";
import { connect } from "react-redux";
import { Selector, Container, InjectFactory } from "@mcf/core";
import { CarAction } from "./action";
import ListView from "./views/List.view";
import FormView from "./views/Form.view";
import DetailView from "./views/Detail.view";
import messages from "./locales";
import { namespace } from "./model";

const { defaultMergeProps } = Container;
const { reducerItemSelector, reducerListSelector,fetchingSelector,appSelector,reducerSelector } = Selector;
export const mapStateToProps = (state: any, props: any) => {
  console.log(reducerListSelector(state, namespace))
  return {
    intl: props.intl,
    actions: InjectFactory.Factory(CarAction),
    appReducer: appSelector(state),
    fetchingReducer: fetchingSelector(state),
    reducer: reducerSelector(state,namespace),
    messages: defineMessages(messages),
    items: reducerListSelector(state, namespace),
    // items: [{
    //   id: 1,
    //   label: 'label1',
    //   name: 'name1'
    // },{
    //   id: 2,
    //   label: 'label2',
    //   name: 'name2'
    // },{
    //   id: 3,
    //   label: 'label3',
    //   name: 'name3'
    // }],
    item: reducerItemSelector(state, namespace, props.match.params.id),
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

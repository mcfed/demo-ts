import { Selector, Container,InjectFactory } from "@mcf/core";
import { CarAction } from "./action";
// import FormView from "./views/Form.view";
import ListView from "./views/List.view";
// import DetailView from "./views/Detail.view";
import messages from "./locales";
import { namespace } from "./model";


console.log(InjectFactory.Factory(CarAction))

const { connectContainer, containerFactory } = Container;
const mapStateToProps = (state: any, props: object) => {
  // Selector.
  return {
    messages: messages,
    Action: CarAction,
    ...Selector.containerSelector(namespace, props)(state)
  };
};
//FactoryContainer
//@ts-ignore
// export const FormContainer = connectContainer(mapStateToProps)(FormView);
//@ts-ignore
export const ListContainer = containerFactory(mapStateToProps)(ListView);
//@ts-ignore
// export const DetailContainer = connectContainer(mapStateToProps)(DetailView);

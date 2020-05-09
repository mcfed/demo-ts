import { renderRoutes } from "react-router-config";
import { RouteComponentProps } from "react-router";
import router from "./router";
import { CarAction as saga } from "./action";
import reducer from "./reducer";
import * as model from "./model";
import * as container from "./container";

export { saga, reducer, router, model, container };
export default (props: RouteComponentProps): JSX.Element =>
  renderRoutes(router(props.match));

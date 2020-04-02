import {renderRoutes} from 'react-router-config'
import router from './router';
import {CarAction as saga} from './action';
import reducer from './reducer';
import * as model from './model';
import * as container from './container';
import {Route, RouteComponentProps } from 'react-router';

export { saga, reducer, router, model, container };
export default (props: RouteComponentProps): Route =>
  renderRoutes(router(props.match));

import { ModuleReducer, ModuleAction } from 'mcf-module';
import { namespace } from './model';

const {
  defaultReducer,
  defaultState,
  reducerCreator,
  megerActionReducer,
} = ModuleReducer;
const { createDefineActions } = ModuleAction;

const reduces:Object = Object.assign(defaultReducer(), {
  //...
});

export const reducerActions:Object = createDefineActions(reduces, namespace);
export const initialState:Object = Object.assign({}, defaultState, {});
export default reducerCreator(
  megerActionReducer(reduces, reducerActions),
  initialState
);

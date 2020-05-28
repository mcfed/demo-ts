import { Dispatch} from 'redux';
import {Proxy} from '@mcf/core';
type Constructor<T = any> = new (...args: any[]) => T;

class MiddleWare {}
export const ActionFactory2 = <T>(
  target: Constructor<T>,
  dispatch: Dispatch,
  namespace: string,
  middleware:MiddleWare,
): T => {
  let providers = Reflect.getMetadata('design:paramtypes', target) || []; // [OtherService]
  providers.pop()
  // console.log(22,providers,target)
  const args = providers.map((provider: Constructor) => {
    console.log(2,provider.prototype)
    let instance = null;
    if (provider.prototype.hasOwnProperty('getReducer')) {
      instance = Proxy.useActionProxy(new provider(), dispatch, namespace);
    } else {
      instance = new provider();
    }
    return instance;
  });
  console.log(1,args,providers,middleware)
  return new target(...args,middleware);
};

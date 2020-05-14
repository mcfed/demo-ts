import { FetchUtils } from '@mcf/utils'; 
import { IApi } from './interface';

const API_PREFIX = "http://192.168.200.178:3000/mock/157/"
//${API_PREFIX}/api_prefix/:id
export default class Api implements IApi{
  fetchList(params?:any) {
    return FetchUtils.fetchList(`${API_PREFIX}list`, {
      body: params,
    });
  }
  fetchItem(params?:any) {
    return FetchUtils.fetchGet(`${API_PREFIX}detail/:id`, {
      body: params,
    });
  }

  fetchSave(params?:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}etail/:id`, {
      body: params,
    });
  }

  fetchUpdate(params?:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchDelete(params?:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}delete`, {
      body: params,
    });
  }
}

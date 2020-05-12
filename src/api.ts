import { FetchUtils } from '@mcf/utils'; 
import { IApi } from './interface';

const API_PREFIX = ""
//${API_PREFIX}/api_prefix/:id
export default class Api implements IApi{
  fetchList(params?:any) {
    return FetchUtils.fetchList(`http://192.168.200.178:3000/mock/157/list`, {
      body: params,
    });
  }
  fetchItem(params?:any) {
    return FetchUtils.fetchGet(`http://192.168.200.178:3000/mock/157/detail/:id`, {
      body: params,
    });
  }

  fetchSave(params?:any) {
    return FetchUtils.fetchPost(`http://192.168.200.178:3000/mock/157/detail/:id`, {
      body: params,
    });
  }

  fetchUpdate(params?:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchDelete(params?:any) {
    return FetchUtils.fetchPost(`http://192.168.200.178:3000/mock/157/delete`, {
      body: params,
    });
  }
}

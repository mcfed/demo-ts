import { FetchUtils } from '@mcf/utils'; 
import { IApi } from './interface';
import { namespace } from './model'

const API_PREFIX = "http://192.168.200.178:3000/mock/157"
const api_prefix = namespace
export default class Api implements IApi{
  fetchList(params?:any) {
    return FetchUtils.fetchList(`${API_PREFIX}/${api_prefix}`, {
      body: params,
    });
  }
  fetchItem(params?:any) {
    return FetchUtils.fetchGet(`${API_PREFIX}/${api_prefix}/detail/:id`, {
      body: params,
    });
  }

  fetchSave(params?:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/${api_prefix}/detail`, {
      body: params,
    });
  }

  fetchUpdate(params?:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/${api_prefix}/detail/:id`, {
      body: params,
    });
  }

  fetchDelete(params?:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/${api_prefix}/delete`, {
      body: params,
    });
  }
}

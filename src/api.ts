import { FetchUtils } from '@mcf/utils'; 
import { IApi } from './interface';

const API_PREFIX = "mock/63"
export default class Api implements IApi{
  fetchList(params:any) {
    return FetchUtils.fetchList(`${API_PREFIX}/capaa/ronghe/list`, {
      body: params,
    });
  }
  fetchItem(params:any) {
    return FetchUtils.fetchGet(`${API_PREFIX}/capaa/ronghe/:id`, {
      body: params,
    });
  }

  fetchSave(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/capaa/ronghe/add`, {
      body: params,
    });
  }

  fetchUpdate(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/capaa/ronghe/:id`, {
      body: params,
    });
  }

  fetchDelete(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/capaa/ronghe/delete`, {
      body: params,
    });
  }
}

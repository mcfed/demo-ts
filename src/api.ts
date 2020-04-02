import { FetchUtils } from 'mcf-utils'; 
import { IApi } from './Interface';

const API_PREFIX = ""
export default class Api implements IApi{
  fetchList(params) {
    return FetchUtils.fetchList(`${API_PREFIX}/api_prefix`, {
      body: params,
    });
  }
  fetchItem(params) {
    return FetchUtils.fetchGet(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchSave(params) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchUpdate(params) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchDelete(params) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }
}

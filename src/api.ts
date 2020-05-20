import { FetchUtils } from '@mcf/utils'; 
import { IApi } from './interface';

const API_PREFIX = "mock/63/mock"
export default class Api implements IApi{
  fetchList(params:any) {
    return FetchUtils.fetchList(`${API_PREFIX}/dbfirewall/sqlWhiteListSetting`, {
      body: params,
    });
  }
  fetchItem(params:any) {
    return FetchUtils.fetchGet(`${API_PREFIX}/dbfirewall/v2/sqlWhiteListSetting/byIds`, {
      body: params,
    });
  }

  fetchSave(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchUpdate(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchDelete(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }
}

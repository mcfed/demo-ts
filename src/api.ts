import { FetchUtils } from '@mcf/utils'; 
import { IApi } from './interface';

const API_PREFIX:string = 'http://192.168.200.178:3000/mock/60/capaa'
export default class Api implements IApi{
  fetchList(params:any) {
    return FetchUtils.fetchList(`${API_PREFIX}/tongfang/manage`, {
      body: params,
    });
  }
  fetchItem(params:any) {
    return FetchUtils.fetchGet(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchSave(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix`, {
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

  fetchPage(params?: any): Promise<ResponsePage> {
    return Promise.resolve({
      pageSize: 10,
      total: 10,
      currentPage: 1,
      items: [{id: 'test id', name: 'test name', title: 'test title'}]
    });
  }
}

export interface ResponsePage {
  pageSize?:number,
  total:number,
  currentPage?: number,
  items?: any[];
}
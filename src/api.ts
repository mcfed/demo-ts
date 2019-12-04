import { FetchUtils } from 'mcf-utils'; // package.json中的globals配置不生效


interface ResultObject {
  code: number;
  message: string;
  success: Boolean;
  data: Object | null;
}

interface ParamsObject {
  id: number|string;
}

/* global API_PREFIX */ 
export function fetchList(params:Object):ResultObject {
  return FetchUtils.fetchList(`${API_PREFIX}/api_prefix`, {
    body: params,
  });
}
export function fetchItem(params:ParamsObject): ResultObject {
  return FetchUtils.fetchGet(`${API_PREFIX}/api_prefix/:id`, {
    body: params,
  });
}

export function fetchSave(params:ParamsObject):ResultObject {
  return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
    body: params,
  });
}

export function fetchUpdate(params:ParamsObject):ResultObject {
  return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
    body: params,
  });
}

export function fetchDelete(params:ParamsObject):ResultObject {
  return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
    body: params,
  });
}

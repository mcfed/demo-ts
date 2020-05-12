const SHOW_SUCCESS = "@@MIDDLEWARE/SHOW_SUCCESS";
const SHOW_ERROR = "@@MIDDLEWARE/SHOW_ERROR";
const SHOW_COMFIRM = "@@MIDDLEWARE/SHOW_COMFIRM";
const SHOW_MESSAGE = "@@MIDDLEWARE/SHOW_MESSAGE";

export function showSuccess(payload:any) {
  return {
    type: SHOW_SUCCESS,
    payload: payload
  };
}

export function showError(payload:any) {
  return {
    type: SHOW_ERROR,
    payload: payload
  };
}

export function showComfirm(payload:any) {
  return {
    type: SHOW_COMFIRM,
    payload: payload
  };
}

export function showMessage(payload:any) {
  return {
    type: SHOW_MESSAGE,
    payload: payload
  };
}

export default function createMessage(message:any) {
  return ({ getState, dispatch }:{getState:any,dispatch:any}) => (next:any) => (action:any) => {
    if (SHOW_SUCCESS === action.type) {
      message.success(action.payload || "操作成功");
    } else if (SHOW_ERROR === action.type) {
      message.error(action.payload);
    } else if (SHOW_COMFIRM === action.type) {
      message.comfirm(action.payload);
    } else if (SHOW_MESSAGE === action.type) {
      message.message(action.payload);
    }
    return next(action);
  };
}

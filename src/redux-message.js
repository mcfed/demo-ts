const SHOW_SUCCESS = "@@MIDDLEWARE/showSuccess";
const SHOW_ERROR = "@@MIDDLEWARE/showError";
const SHOW_COMFIRM = "@@MIDDLEWARE/showComfirm";
const SHOW_MESSAGE = "@@MIDDLEWARE/showMessage";

export function showSuccess(payload) {
  return {
    type: SHOW_SUCCESS,
    payload: payload
  };
}

export function showError(payload) {
  return {
    type: SHOW_ERROR,
    payload: payload
  };
}

export function showComfirm(payload) {
  return {
    type: SHOW_COMFIRM,
    payload: payload
  };
}

export function showMessage(payload) {
  return {
    type: SHOW_MESSAGE,
    payload: payload
  };
}

export default function createMessage(message) {
  return ({ getState, dispatch }) => next => action => {
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

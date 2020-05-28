// import {namespace} from './model';
// export default function mock() {
//   return {};
// }


const FETCH_LOGINING = '@@MIDDLEWARE/FETCH_LOGINING';
const FETCH_PARAMS = '@@MIDDLEWARE/FETCH_PARAMS';
// export default function fetchLogining(payload: any) {
//   return {
//     type: FETCH_LOGINING,
//     payload: payload
//   };
// }

export default function fetchParams(payload: any) {
  return {
    type: FETCH_PARAMS,
    payload
  };
}
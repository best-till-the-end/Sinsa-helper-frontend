import * as types from './types';
import axios from 'axios';

export function mainChoose(title) {
  return {
    type: types.MAIN_CATEGORY_CHOOSE,
    title,
  };
}
export function subChoose() {
  return {
    type: types.SUB_CATEGORY_CHOOSE,
  };
}
export function resetCategory() {
  return {
    type: types.CATEGORY_RESET
  }
}
export function postSearch(body) {
  return (dispatch) => {
    dispatch(postSearchRequest());
    return axios
      .post("http://localhost:8080/search", body)
      .then((response) => {
        dispatch(postSearchRequestSuccess());
      })
      .catch((error) => {
        dispatch(postSearchRequestFailure());
      });
  };
}

export function postSearchRequest() {
  return {
    type: types.POST_SEARCH_RESURT,
  };
}

export function postSearchRequestSuccess() {
  return {
    type: types.POST_SEARCH_RESURT_SUCCESS,
  };
}

export function postSearchRequestFailure() {
  return {
    type: types.POST_SEARCH_RESURT_FAILURE,
  };
}

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
    type: types.CATEGORY_RESET,
  };
}
export function resetMainCategory() {
  return {
    type: types.MAIN_CATEGORY_RESET,
  };
}
export function resetSubCategory(main) {
  return {
    type: types.SUB_CATEGORY_RESET,
    main,
  };
}
export function getSearchResult(body) {
  return async (dispatch) => {
    dispatch(getSearchRequest());
    try {
      const response = await axios.get('http://localhost:8080/getSearch', {
        params: body,
      });
      dispatch(getSearchRequestSuccess(response.data));
    } catch (error) {
      dispatch(getSearchRequestFailure());
    }
  };
}

export function getSearchRequest() {
  return {
    type: types.GET_SEARCH_RESULT,
  };
}

export function getSearchRequestSuccess(searchResult) {
  return {
    type: types.GET_SEARCH_RESULT_SUCCESS,
    searchResult,
  };
}

export function getSearchRequestFailure() {
  return {
    type: types.GET_SEARCH_RESULT_FAILURE,
  };
}

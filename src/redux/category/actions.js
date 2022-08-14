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
// getSearch
export function getSearchResult(body, headers) {
  return async (dispatch) => {
    dispatch(getSearchRequest());
    try {
      const response = await axios.get('http://localhost:8080/search/result', {
        params: body,
        headers: headers,
      });
      dispatch(getSearchRequestSuccess(response.data));
      console.log(response.data);
    } catch (error) {
      dispatch(getSearchRequestFailure());
      console.log(error);
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

// postUrl
export function postItemUrl(url, headers) {
  return async (dispatch) => {
    dispatch(postItemUrlRequest());
    console.log(url);
    console.log(headers);
    let body = {
      url: url,
    };
    try {
      const response = await axios.get('http://localhost:8080/item', {
        params: body,
        headers: headers,
      });
      dispatch(postItemUrlRequestSuccess(response.data));
      console.log(response.data);
    } catch (error_1) {
      dispatch(postItemUrlRequestFailure());
      console.log(error_1);
    }
  };
}

export function postItemUrlRequest() {
  return {
    type: types.POST_ITEM_URL,
  };
}

export function postItemUrlRequestSuccess(error) {
  return {
    type: types.POST_ITEM_URL_SUCCESS,
    error,
  };
}

export function postItemUrlRequestFailure() {
  return {
    type: types.POST_ITEM_URL_FAILURE,
  };
}
export function handleLikeWishItem(body, item_id, headers) {
  return async (dispatch) => {
    dispatch(wishItemLikeRequest());

    try {
      const response = await axios.get(
        `http://localhost:8080/wish/like/${item_id}`,
        {
          headers: headers,
        }
      );
      dispatch(wishItemLikeRequestSuccess());
      getSearchResult(body, headers);

      console.log(response.data);
    } catch (error) {
      dispatch(wishItemLikeRequestFailure());
      console.log(error);
    }
  };
}

export function wishItemLikeRequest() {
  return {
    type: types.LIKE_WISH_ITEM,
  };
}

export function wishItemLikeRequestSuccess() {
  return {
    type: types.LIKE_WISH_ITEM_SUCCESS,
  };
}

export function wishItemLikeRequestFailure() {
  return {
    type: types.LIKE_WISH_ITEM_FAILURE,
  };
}

export function handleDislikeWishItem(body, item_id, headers) {
  return async (dispatch) => {
    dispatch(dislikeWishItem());
    try {
      const response = await axios.delete(
        `http://localhost:8080/wish/dislike/${item_id}`,
        {
          headers: headers,
        }
      );
      dispatch(dislikeWishItemSuccess());
      getSearchResult(body, headers);
      console.log(response.data);
    } catch (error) {
      dispatch(dislikeWishItemFailure());
      console.log(error);
    }
  };
}

export function dislikeWishItem() {
  return {
    type: types.DISLIKE_WISH_ITEM,
  };
}
export function dislikeWishItemSuccess() {
  return {
    type: types.DISLIKE_WISH_ITEM_SUCCESS,
  };
}
export function dislikeWishItemFailure() {
  return {
    type: types.DISLIKE_WISH_ITEM_FAILURE,
  };
}

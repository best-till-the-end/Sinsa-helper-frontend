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
  return (dispatch) => {
    dispatch(getSearchRequest());
    return axios
      .get('http://localhost:8080/search/result', {
        params: body,
        headers: headers,
      })
      .then((response) => {
        dispatch(getSearchRequestSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        dispatch(getSearchRequestFailure());
        console.log(error);
      });
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
  return (dispatch) => {
    dispatch(postItemUrlRequest());
    console.log(url);
    console.log(headers);
    let body = {
      url: url,
    };
    return axios
      .get('http://localhost:8080/item', {
        params: body,
        headers: headers,
      })
      .then((response) => {
        dispatch(postItemUrlRequestSuccess());
        console.log(response.data);
      })

      .catch((error) => {
        dispatch(postItemUrlRequestFailure());
        console.log(error);
      });
  };
}

export function postItemUrlRequest() {
  return {
    type: types.POST_ITEM_URL,
  };
}

export function postItemUrlRequestSuccess() {
  return {
    type: types.POST_ITEM_URL_SUCCESS,
  };
}

export function postItemUrlRequestFailure() {
  return {
    type: types.POST_ITEM_URL_FAILURE,
  };
}
export function handleLikeWishItem(item_id, headers) {
  return (dispatch) => {
    dispatch(wishItemLikeRequest());

    return axios
      .get(`http://localhost:8080/wish/like/${item_id}`, {
        headers: headers,
      })
      .then((response) => {
        dispatch(wishItemLikeRequestSuccess());
        console.log(response.data);
      })

      .catch((error) => {
        dispatch(wishItemLikeRequestFailure());
        console.log(error);
      });
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

export function handleDislikeWishItem(item_id, headers) {
  return (dispatch) => {
    dispatch(dislikeWishItem());
    return axios
      .delete(`http://localhost:8080/wish/dislike/${item_id}`, {
        headers: headers,
      })
      .then((response) => {
        dispatch(dislikeWishItemSuccess());
        console.log(response.data);
      })
      .catch((error) => {
        dispatch(dislikeWishItemFailure());
        console.log(error);
      });
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

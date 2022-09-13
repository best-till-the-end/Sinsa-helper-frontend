import axios from 'axios';
import * as types from './types';

export function getWishListRequest(headers) {
  return async (dispatch) => {
    dispatch(getWishList());

    try {
      const response = await axios.get('/wish/list', {
        headers: headers,
      });
      dispatch(getWishListSuccess(response.data));
    } catch (e) {
      dispatch(getWishListFailure());
      console.log(e);
    }
  };
}

export function getWishList() {
  return {
    type: types.GET_WISH_LIST_REQUEST,
  };
}

export function getWishListSuccess(wishList) {
  return {
    type: types.GET_WISH_LIST_SUCCESS,
    wishList,
  };
}

export function getWishListFailure() {
  return {
    type: types.GET_WISH_LIST_FAILURE,
  };
}

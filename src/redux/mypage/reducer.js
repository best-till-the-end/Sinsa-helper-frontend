import * as types from './types';

const initialState = {
  kakakoAuth: {
    status: 'INIT',
  },
  kakaoLogin: {
    status: 'INIT',
  },
  status: {
    valid: false,
    isLoading: false,
    wishList: [],
  },
};

export default function myPage(state = initialState, action) {
  switch (action.type) {
    case types.GET_WISH_LIST_REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
        },
      };
    case types.GET_WISH_LIST_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          wishList: action.wishList,
        },
      };
    case types.GET_WISH_LIST_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: true,
        },
      };
    default:
      return state;
  }
}

import * as types from './types';
import mainData from './mainData';
import { outer, top, pants } from './subData';

const initialState = {
  data: {
    current: mainData,
  },
  status: {
    isMainCategoryChoose: false,
    isSubCategoryChoose: false,
    valid: false,
    loading: false,
    error: '',
    like: {
      liked: false,
      likeSrc: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
      NonLikeSrc: 'https://cdn-icons-png.flaticon.com/512/833/833300.png',
    },
    searchResult: [],
  },
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case types.MAIN_CATEGORY_CHOOSE:
      console.log('main choose');
      console.log(action.title);
      let sub;
      switch (action.title) {
        case '외투':
          sub = outer;
          break;
        case '상의':
          sub = top;
          break;
        case '바지':
          sub = pants;
          break;
        default:
          break;
      }
      console.log(sub);

      return {
        ...state,
        data: {
          current: sub,
        },
        status: {
          ...state.status,
          isMainCategoryChoose: true,
        },
      };
    case types.SUB_CATEGORY_CHOOSE:
      console.log('sub choose');
      return {
        ...state,
        data: {
          current: [],
        },
        status: {
          ...state.status,
          isSubCategoryChoose: true,
        },
      };
    case types.CATEGORY_RESET:
      return {
        ...state,
        data: {
          current: mainData,
        },
        status: {
          ...state.status,
          isMainCategoryChoose: false,
          isSubCategoryChoose: false,
        },
      };
    case types.MAIN_CATEGORY_RESET:
      return {
        ...state,
        data: {
          current: mainData,
        },
        status: {
          ...state.status,
          isMainCategoryChoose: false,
          isSubCategoryChoose: false,
        },
      };
    case types.SUB_CATEGORY_RESET:
      let resub;
      switch (action.main) {
        case '외투':
          resub = outer;
          break;
        case '상의':
          resub = top;
          break;
        case '바지':
          resub = pants;
          break;
        default:
          break;
      }
      console.log(resub);

      return {
        ...state,
        data: {
          current: resub,
        },
        status: {
          ...state.status,
          isSubCategoryChoose: false,
        },
      };
    case types.GET_SEARCH_RESULT:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case types.GET_SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          loading: false,
          searchResult: action.searchResult,
        },
      };
    case types.GET_SEARCH_RESULT_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          valid: false,
          loading: false,
        },
      };
    case types.POST_ITEM_URL:
      return {
        ...state,
      };
    case types.POST_ITEM_URL_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          error: action.error,
        },
      };
    case types.POST_ITEM_URL_FAILURE:
      return {
        ...state,
      };
    case types.LIKE_WISH_ITEM:
      return {
        ...state,
      };
    case types.LIKE_WISH_ITEM_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          like: {
            ...state.status.like,
            liked: true,
          },
        },
      };
    case types.LIKE_WISH_ITEM_FAILURE:
      return {
        ...state,
      };
    case types.DISLIKE_WISH_ITEM:
      return {
        ...state,
      };
    case types.DISLIKE_WISH_ITEM_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          like: {
            ...state.status.like,
            liked: false,
          },
        },
      };
    case types.DISLIKE_WISH_ITEM_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          searchResult: action.searchResult,
          like: {
            ...state.status.like,
          },
        },
      };

    default:
      return state;
  }
}

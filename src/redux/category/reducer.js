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
    loading: false
  },
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case types.MAIN_CATEGORY_CHOOSE:
      console.log('main choose');
      console.log(action.title);
      let sub;
      switch (action.title) {
        case 'outer':
          sub = outer;
          break;
        case 'top':
          sub = top;
          break;
        case 'pants':
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
        }
      }
    case types.POST_SEARCH_RESURT:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true
        }
      };
    case types.POST_SEARCH_RESURT_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          loading: false,
        },
      };
    case types.POST_SEARCH_RESURT_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          valid: false,
          loading: false,
        },
      };
    default:
      return state;
  }
}

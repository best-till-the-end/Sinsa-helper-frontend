import * as types from './types';
import mainData from './mainData';
import { outer } from './subData';

const initialState = {
  data: {
    current: {
      mainData,
    },
  },
  status: {
    isMainCategoryChoose: false,
    isSubCategoryChoose: false,
  },
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case types.MAIN_CATEGORY_CHOOSE:
      console.log('main choose');
      console.log(initialState);
      console.log(outer);

      return {
        ...state,
        data: {
          current: action.title,
        },
        status: {
          isMainCategoryChoose: true,
        },
      };
    case types.SUB_CATEGORY_CHOOSE:
      console.log('sub choose');
      return {
        ...state,
        status: {
          isSubCategoryChoose: true,
        },
      };
    default:
      return state;
  }
}

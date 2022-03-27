import * as types from './types';
import mainData from './mainData';
import subData from './subData';

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
      return {
        ...state,
        data: {
          current: { subData },
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

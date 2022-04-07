import * as types from './types';
import mainData from './mainData';
import { outer, top, pants } from './subData';
import { useState } from 'react';
import { FreeBreakfastOutlined } from '@material-ui/icons';

const initialState = {
  data: {
    current: mainData,
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
          isMainCategoryChoose: true,
        },
      };
    case types.SUB_CATEGORY_CHOOSE:
      console.log('sub choose');
      return {
        ...state,
        data: {
          current: mainData,
        },
        status: {
          isSubCategoryChoose: true,
        },
      };
    default:
      return state;
  }
}

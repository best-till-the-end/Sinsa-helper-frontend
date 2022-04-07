import * as types from './types';

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

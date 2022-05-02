import { combineReducers } from 'redux';
import kakaoAuth from './kakaoAuth/reducer';
import category from './category/reducer';
import myPage from './mypage/reducer';
const rootReducer = combineReducers({
  kakaoAuth: kakaoAuth,
  category: category,
  myPage: myPage,
});

export default rootReducer;

import { combineReducers } from 'redux';
import kakaoAuth from './user/reducer';

const rootReducer = combineReducers({
  kakaoAuth: kakaoAuth,
});

export default rootReducer;

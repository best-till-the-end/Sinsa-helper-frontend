// 리다이렉트될 화면
// OAuthRedirectHandeler.js

import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { kakaoAuthRequest } from '../../redux';

//import Spinner from "./Spinner";

function KakaoAuthTokenHandler({ kakaoAuthRequest, isLoggedIn }) {
  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get('code');
    kakaoAuthRequest(code);
  }, []);

  return <div>hello kakao</div>;
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.kakaoAuth.status.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kakaoAuthRequest: (code) => {
      return dispatch(kakaoAuthRequest(code));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KakaoAuthTokenHandler);

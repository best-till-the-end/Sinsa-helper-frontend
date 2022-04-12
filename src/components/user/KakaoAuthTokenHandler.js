// 리다이렉트될 화면
// OAuthRedirectHandeler.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { kakaoAuthRequest } from '../../redux';
import { checkSession } from '../../redux/kakaoAuth/actions';

//import Spinner from "./Spinner";

function KakaoAuthTokenHandler({ kakaoAuthRequest, isLoggedIn }) {
  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get('code');
    kakaoAuthRequest(code);
  }, []);

  const navigate = useNavigate();
  if (isLoggedIn === true) {
    let headers = {
      Authorization: localStorage.getItem('token'),
    };
    checkSession(headers);
    navigate('/');
  }
  return <div></div>;
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
    checkSession: (headers) => {
      return dispatch(checkSession(headers));
    },
  };
};

React.memo(KakaoAuthTokenHandler);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KakaoAuthTokenHandler);

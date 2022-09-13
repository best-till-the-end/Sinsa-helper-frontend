// 리다이렉트될 화면
// OAuthRedirectHandeler.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { kakaoAuthRequest, checkSessionRequest } from '../../redux';

function KakaoAuthTokenHandler({ kakaoAuthRequest, isLoggedIn }) {
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    kakaoAuthRequest(code);
  }, [kakaoAuthRequest]);
  if (isLoggedIn === true) {
    const headers = {
      Authorization: localStorage.getItem('token'),
    };
    checkSessionRequest(headers);
  }
  useEffect(() => {
    navigate('/');
  });
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
    checkSessionRequest: (headers) => {
      return dispatch(checkSessionRequest(headers));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KakaoAuthTokenHandler);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { kakaoAuthRequest } from '../../redux';

function OAuthRedirect({ kakaoAuthRequest }) {
  useEffect(() => {
    kakaoAuthRequest();
  }, []);
  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  return <div></div>;
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.kakaoAuth.status.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kakaoAuthRequest: () => {
      return dispatch(kakaoAuthRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OAuthRedirect);

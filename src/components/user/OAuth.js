import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  marign-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #f0ffff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12 %);
`;

function OAuth() {
  const API_BASE_URL = 'http://localhost:8080';
  const CLIENT_ID = 'GOOGLE';
  const REDIRECT_URI = 'http://localhost:3000/oauth/redirect';
  const OAUTH_URL =
    API_BASE_URL + '/oauth/authorization/google?redirect_url=' + REDIRECT_URI;

  return (
    <div>
      <Button href={OAUTH_URL}>구글 로그인</Button>
    </div>
  );
}

export default OAuth;

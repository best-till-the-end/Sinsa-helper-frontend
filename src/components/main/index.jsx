import React from 'react';
import { Section, Content, Left, Title, Desc, Button } from './styles';
import KakaoAuth from '../user/KakaoAuth';

const Main = ({ token, isLoggedIn, onClick }) => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            쇼핑몰 리뷰 Text Mining <br /> 상품 추천 서비스
          </Title>
          <Desc>
            사용자들이 직접적으로 사용하고 느낀 리뷰를 Ai 모델을 통해 분석하여
            <br />좀 더 쉽게 원하는 타입의 상품을 검색하고 구입하게 한 사이트
          </Desc>
          {token || isLoggedIn ? (
            <Button onClick={onClick}>검색하러 가기</Button>
          ) : (
            <KakaoAuth />
          )}
        </Left>
      </Content>
    </Section>
  );
};

export default Main;

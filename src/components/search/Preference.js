import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Title } from './Search';
import { connect, useDispatch } from 'react-redux';
import {
  resetMainCategory,
  resetSubCategory,
  getSearchResult,
} from '../../redux/category/actions';

const smoothAppear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
}
`;
const PreferContainer = styled.div`
  justfy-contnet: center;
  width: 768px;
  height: 512px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  animation: ${smoothAppear} 1s;
`;
const Header = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;

  .category {
    margin-bottom: 5px;
    font-size: 21px;
  }
`;
const CategoryContainer = styled.div`
  display: flex;

  button {
    width: 200px;
    color: white;
    background-color: #0000CD;

    border: 1px none;
    border-radius: 10px;
    margin-left: auto;
    margin-bottom: 4px;
    padding-left: 3px;
    padding-right: 3px;
    &:hover {
      background-color: #4646CD;
  }
`;
const Prefer = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;

  h1 {
    margin: 0;
    font-size: 21px;
  }
  div {
    margin-top: 20px;
    font-size: 15px;
  }

  input {
    margin-top: 20px;
  }
`;

function Preference({ main, sub }) {
  const [deliveryScore, setDeliveryScore] = useState(0);
  const [sizeScore, setSizeScore] = useState(0);
  const [qualityScore, setQualityScore] = useState(0);

  const dispatch = useDispatch();
  const resetMain = () => {
    dispatch(resetMainCategory());
  };
  const resetSub = (main) => {
    dispatch(resetSubCategory(main));
  };
  const handleScore = (pref, score) => {
    switch (pref) {
      case 'delivery':
        setDeliveryScore(score);
        break;
      case 'size':
        setSizeScore(score);
        break;
      case 'quality':
        setQualityScore(score);
        break;
      default:
        break;
    }
  };
  const handleSearch = () => {
    console.log(deliveryScore);
    let body = {
      mainCategory: main,
      subCategory: sub,
      deliveryScore: deliveryScore,
      sizeScore: sizeScore,
      qualityScore: qualityScore,
    };
    getSearchResult(body);
    console.log(body);
  };
  return (
    <div>
      <Title>선호도</Title>
      <PreferContainer>
        <Header>
          <CategoryContainer>
            <div className="category">대분류: {main}</div>
            <button onClick={resetMain}> 대분류 다시 고르기</button>
          </CategoryContainer>
          <CategoryContainer>
            <div className="category"> 소분류: {sub}</div>
            <button onClick={() => resetSub(main)}>소분류 다시 고르기</button>
          </CategoryContainer>
        </Header>
        <Prefer>
          <h1>점수를 입력하세요</h1>
          <div>배송 점수:</div>
          <input
            onChange={(e) => handleScore('delivery', e.target.value)}
          ></input>
          <div>사이즈 점수:</div>
          <input onChange={(e) => handleScore('size', e.target.value)}></input>
          <div>품질 점수:</div>
          <input
            onChange={(e) => handleScore('quality', e.target.value)}
          ></input>
          <CategoryContainer>
            <button onClick={() => handleSearch}>검색하기</button>
          </CategoryContainer>
        </Prefer>
      </PreferContainer>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchResult: (body) => {
      return dispatch(getSearchResult(body));
    },
  };
};

React.memo(Preference);
export default connect(mapStateToProps, mapDispatchToProps)(Preference);

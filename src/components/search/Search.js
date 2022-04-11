/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { mainChoose, subChoose } from '../../redux';
import styled, { keyframes } from 'styled-components';
import { outer, top, pants } from '../../redux/category/subData';

const smoodhAppear = keyframes`

`;
const Section = styled.section`
  background: black;
  height: 100vh;
  border: None;

  @media only screen and (max-width: 991px) {
    height: 180vh;
  }
`;
const Title = styled.h1`
  text-align: center;
  color: white;
  padding: 0 10px;
  margin-bottom: 10px;
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
`;
const Prefer = styled.div`
  display: block;
  color: black;
`;
const MainCategory = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  padding: 0 12px;

  @media only screen and (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
`;
const SubCategory = styled.div`
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  padding: 0 12px;

  @media only screen and (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
`;
const Picture = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  filter: brightness(50%);
  &:hover {
    filter: brightness(100%);
  }
`;

function Search({ data, isMainCategoryChoose, isSubCategoryChoose }) {
  const dispatch = useDispatch();
  const [main, setMain] = useState('');
  const [sub, setSub] = useState('');
  const onClickMain = async (title) => {
    dispatch(mainChoose(title));
    setMain(title);
    console.log(data);
  };
  const onClickSub = async (title) => {
    dispatch(subChoose());
    setSub(title);
  };
  const mainCategory = (
    <div>
      <Title>대분류</Title>
      <MainCategory>
        {data.map((item, index) => {
          return (
            <Picture key={index}>
              <img
                src={item.imageUrl}
                style={{ width: '100%' }}
                onClick={() => onClickMain(item.title)}
              />
              <h1 style={{ color: 'white', textAlign: 'center' }}>
                {item.title}
              </h1>
            </Picture>
          );
        })}
      </MainCategory>
    </div>
  );
  const subCategory = (
    <div>
      {console.log(data)}
      <Title>소분류</Title>
      <SubCategory>
        {data.map((item, index) => {
          return (
            <Picture key={index}>
              <img
                src={item.imageUrl}
                style={{ width: '100%' }}
                onClick={() => onClickSub(item.title)}
              />
              <h1 style={{ color: 'white', textAlign: 'center' }}>
                {item.title}
              </h1>
            </Picture>
          );
        })}
      </SubCategory>
    </div>
  );
  const preference = (
    <div>
      <Title>선호도</Title>
      <PreferContainer>
        <Prefer value={'배송'}></Prefer>
      </PreferContainer>
    </div>
  );
  return (
    <div>
      <Section>
        {isMainCategoryChoose
          ? isSubCategoryChoose
            ? preference
            : subCategory
          : mainCategory}
      </Section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.category.data.current,
    isMainCategoryChoose: state.category.status.isMainCategoryChoose,
    isSubCategoryChoose: state.category.status.isSubCategoryChoose,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);

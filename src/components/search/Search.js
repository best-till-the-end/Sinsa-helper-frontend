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
`;
const ExButton = styled.button`
  position: absolute;
  top: 500px;
  background: white;
  height: 10px;
`;
const Title = styled.h1`
  text-align: center;
  color: white;
  padding: 0 10px;
  margin-bottom: 10px;
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
  -webkit-column-width: 25%;
  -moz-column-width: 25%;
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
function Search({ data, isMainCategoryChoose }) {
  const [main, setMain] = useState('');
  const dispatch = useDispatch();
  const handleData = async (title) => {
    dispatch(mainChoose(title));
    setMain(title);
    console.log(data);
  };
  const onClick = () => {};
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
                onClick={() => handleData(item.title)}
              />
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
              <img src={item.imageUrl} style={{ width: '100%' }} />
            </Picture>
          );
        })}
      </SubCategory>
    </div>
  );
  return (
    <div>
      <Section>{isMainCategoryChoose ? subCategory : mainCategory}</Section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.category.data.current,
    isMainCategoryChoose: state.category.status.isMainCategoryChoose,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);

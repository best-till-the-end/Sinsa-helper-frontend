import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { mainChoose, subChoose } from '../../redux';
import styled, { keyframes } from 'styled-components';

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
`;
const Picture = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  filter: brightness(50%);
`;
function Search({ data }) {
  const dispatch = useDispatch();
  const handleData = async () => {
    dispatch(mainChoose());
    console.log(data);
  };

  let currentData = data.mainData;
  const mainCategory = (
    <div>
      <Title>대분류</Title>
      <MainCategory>
        {data.mainData.map((item, index) => {
          return (
            <Picture key={index}>
              <img src={item.imageUrl} style={{ width: '100%' }} />
            </Picture>
          );
        })}
      </MainCategory>
    </div>
  );
  return (
    <div>
      <Section>{mainCategory}</Section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.category.data.current,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);

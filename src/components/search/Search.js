import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { mainChoose, subChoose } from '../../redux';
import styled from 'styled-components';

const Section = styled.section`
  background: black;
  height: 100vh;
  border: None;
`;
const ExButton = styled.button`
  position: absolute;
  top: 50px;
  background: white;
  height: 10px;
`;
function Search({ data }) {
  const dispatch = useDispatch();
  const handleData = async () => {
    dispatch(mainChoose());
    console.log(data);
  };
  return (
    <div>
      <Section>{console.log(data)}</Section>
      <ExButton onClick={handleData}>예</ExButton>
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

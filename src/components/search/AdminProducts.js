import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { postItemUrl } from '../../redux/category/actions';
import { connect } from 'react-redux';

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

const Section = styled.section`
  background: black;
  height: 100vh;
  display: flex;
  border: None;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  animation: ${smoothAppear} 1s;
`;
const Container = styled.div`
  display: block;
  div {
    margin-top: 30px;
    color: lightgray;
    white-space: pre-wrap;
  }
`;
const Title = styled.p`
  margin-top: 350px;
  width: 800px;
  font-size: 55px;
  color: white;
  font-weight: 300;
`;
const Input = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  background: white;
  height: 50px;
  width: 760px;
  padding: 10px 20px;
  border-radius: 999px;
  margin-top: 50px;
  max-width: 960px;

  input {
    flex: 1;
    padding: 10px 20px;
    font-size: medium;
    border: none;

    &:focus {
      outline-width: 0;
    }
  }
  button {
    border: 1px solid lightgray;
    border-radius: 999px;
    padding: 5px 5px;
    cursor: pointer;

    &:hover {
      background: lightgray;
    }
  }
`;

function AdminProducts() {
  const [input, setInput] = useState('');
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const add = () => {
    postItemUrl(input);
    alert('상품이 등록되었습니다.');
  };
  return (
    <Section>
      <Content>
        <Container>
          <center>
            <Title>상품의 URL을 적으세요</Title>
            <div>
              같이 분석하고 싶은 상품을 등록하세요. 상품 등록은 5분 정도의
              시간이 걸릴 수 있습니다..
            </div>
            <Input>
              <input value={input} onChange={(e) => onChange(e)} />
              <button onClick={add}>upload</button>
            </Input>
          </center>
        </Container>
      </Content>
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    postItemUrl: (url) => {
      return dispatch(postItemUrl(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);

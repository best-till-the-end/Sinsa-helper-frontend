import styled, { keyframes } from 'styled-components';

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

export const Section = styled.section`
  background: black;
  height: 100vh;
  display: flex;
  border: None;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  animation: ${smoothAppear} 1s;
`;
export const Container = styled.div`
  display: block;
  div {
    margin-top: 30px;
    color: lightgray;
    white-space: pre-wrap;
  }
`;
export const Title = styled.p`
  margin-top: 350px;
  width: 800px;
  font-size: 55px;
  color: white;
  font-weight: 300;
`;
export const Input = styled.div`
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

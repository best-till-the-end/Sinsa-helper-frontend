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
  display: block;
  border: None;
`;
export const Content = styled.div`
  width: 100%;
  height: 100px;

  animation: ${smoothAppear} 1s;
`;
export const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;
export const Title = styled.p`
  width: 800px;
  font-size: 55px;
  color: white;
  font-weight: 400;
`;
export const Desc = styled.p`
  width: 800px;
  font-size: 20px;
  color: white;
  line-height: 30px;
  margin-top: 58px;
  margin-bottom: 40px;
`;
export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #f0ffff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12);
`;

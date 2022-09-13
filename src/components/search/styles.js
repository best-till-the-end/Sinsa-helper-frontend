import styled, { keyframes } from 'styled-components';

export const smoothAppear = keyframes`
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
  border: None;

  @media only screen and (max-width: 991px) {
    height: 180vh;
  }
`;
export const Title = styled.h1`
  text-align: center;
  color: white;
  padding: 0 10px;
  margin-bottom: 10px;
  animation: ${smoothAppear} 1s;
`;
export const Picture = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  filter: brightness(50%);
  &:hover {
    filter: brightness(100%);
  }
`;

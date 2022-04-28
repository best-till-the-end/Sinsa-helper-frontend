import React from 'react';
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
const Section = styled.section`
  background: black;
  height: 100vh;
  display: block;
  border: None;
`;
function MyPage() {
  return <Section></Section>;
}

export default MyPage;

import styled from 'styled-components';
import { smoothAppear } from '../styles';

export const Sub = styled.div`
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  padding: 0 12px;
  animation: ${smoothAppear} 1s;

  @media only screen and (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
`;

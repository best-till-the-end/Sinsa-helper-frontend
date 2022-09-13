import styled from 'styled-components';
import { smoothAppear } from '../styles';

export const Main = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
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

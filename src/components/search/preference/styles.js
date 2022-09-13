import styled from 'styled-components';
import { smoothAppear } from '../styles';

export const PreferContainer = styled.div`
  justify-content: center;
  width: 512px;
  height: 512px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  animation: ${smoothAppear} 1s;
`;
export const Header = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;

  .category {
    margin-bottom: 5px;
    font-size: 21px;
  }
`;
export const CategoryContainer = styled.div`
  display: flex;

  button {
    width: 150px;
    height: 29px;
    color: white;
    background-color: #0000cd;

    border: 1px none;
    border-radius: 10px;
    margin-left: auto;
    margin-bottom: 4px;
    padding-left: 3px;
    padding-right: 3px;
    &:hover {
      background-color: #4646cd;
    }
  }
`;

export const Prefer = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  h1 {
    margin: 0;
    font-size: 21px;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const Label = styled.div`
  font-size: 1rem;
  color: #505050;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;

  outline: none;
  border-radius: 2px;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 1rem;

  &:hover {
    filter: brightness(90%);
  }
`;
export const SearchButton = styled.button`
  width: 100%;
  height: 50px;
  color: white;
  background-color: #0000cd;
  border: 1px none;

  border-radius: 10px;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 45px;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: #4646cd;
  }
`;

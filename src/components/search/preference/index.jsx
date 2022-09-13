import React from 'react';
import { Title } from '../styles';
import {
  PreferContainer,
  Header,
  CategoryContainer,
  Prefer,
  Label,
  Input,
  SearchButton,
} from './styles';

const Preference = ({
  main,
  sub,
  resetMain,
  resetSub,
  delivery,
  onChange,
  handleSearch,
  size,
  quality,
}) => {
  return (
    <div>
      <Title>선호도</Title>
      <PreferContainer>
        <Header>
          <CategoryContainer>
            <div className='category'>대분류: {main}</div>
            <button onClick={resetMain}> 대분류 다시 고르기</button>
          </CategoryContainer>
          <CategoryContainer>
            <div className='category'> 소분류: {sub}</div>
            <button onClick={() => resetSub(main)}>소분류 다시 고르기</button>
          </CategoryContainer>
        </Header>
        <Prefer>
          <Label>배송</Label>
          <Input
            name='delivery'
            placeholder='점수를 입력하세요'
            value={delivery}
            onChange={onChange}
          />
          <Label>사이즈</Label>
          <Input
            name='size'
            placeholder='점수를 입력하세요'
            value={size}
            onChange={onChange}
          />
          <Label>품질</Label>
          <Input
            name='quality'
            placeholder='점수를 입력하세요'
            value={quality}
            onChange={onChange}
          />
          <div>세 점수의 합이 100이 되게 입력하세요</div>
          <SearchButton className='search' onClick={handleSearch}>
            검색하기
          </SearchButton>
        </Prefer>
      </PreferContainer>
    </div>
  );
};

export default Preference;

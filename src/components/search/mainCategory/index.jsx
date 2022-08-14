import React from 'react';
import { Title, Picture } from '../styles';
import { Main } from './styles';

const MainCategory = ({ data, onClickMain }) => {
  return (
    <div>
      <Title>소분류</Title>
      <Main>
        {data.map((item, index) => {
          return (
            <Picture key={index}>
              <img
                src={item.imageUrl}
                style={{ width: '100%' }}
                onClick={() => onClickMain(item.title)}
                alt='item'
              />
              <h1 style={{ color: 'white', textAlign: 'center' }}>
                {item.title}
              </h1>
            </Picture>
          );
        })}
      </Main>
    </div>
  );
};

export default MainCategory;

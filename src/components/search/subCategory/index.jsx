import React from 'react';
import { Title, Picture } from '../styles';
import { Sub } from './styles';

const SubCategory = ({ data, onClickSub }) => {
  return (
    <div>
      <Title>소분류</Title>
      <Sub>
        {data.map((item, index) => {
          return (
            <Picture key={index}>
              <img
                src={item.imageUrl}
                style={{ width: '100%' }}
                onClick={() => onClickSub(item.title)}
                alt='item'
              />
              <h1 style={{ color: 'white', textAlign: 'center' }}>
                {item.title}
              </h1>
            </Picture>
          );
        })}
      </Sub>
    </div>
  );
};

export default SubCategory;

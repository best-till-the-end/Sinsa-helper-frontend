import React from 'react';
import Preference from './preference/index';
import { Section } from './styles';
import MainCategory from './mainCategory/index';
import SubCategory from './subCategory/index';

const Search = ({
  isMainCategoryChoose,
  isSubCategoryChoose,
  main,
  sub,
  data,
  onClickMain,
  onClickSub,
  resetMain,
  resetSub,
  onChange,
  handleSearch,
  delivery,
  size,
  quality,
}) => {
  return (
    <div>
      <Section>
        {isMainCategoryChoose ? (
          isSubCategoryChoose ? (
            <Preference
              main={main}
              sub={sub}
              resetMain={resetMain}
              resetSub={resetSub}
              delivery={delivery}
              onChange={onChange}
              handleSearch={handleSearch}
              size={size}
              quality={quality}
            />
          ) : (
            <SubCategory data={data} onClickSub={onClickSub} />
          )
        ) : (
          <MainCategory data={data} onClickMain={onClickMain} />
        )}
      </Section>
    </div>
  );
};

export default Search;

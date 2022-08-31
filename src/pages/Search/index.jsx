import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { mainChoose, subChoose } from '../../redux';
import {
  resetMainCategory,
  resetSubCategory,
  getSearchResult,
} from '../../redux/category/actions';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/search/';

const SearchPage = ({
  data,
  isMainCategoryChoose,
  isSubCategoryChoose,
  getSearchResult,
}) => {
  const dispatch = useDispatch();
  const [main, setMain] = useState('');
  const [sub, setSub] = useState('');
  const navigate = useNavigate();
  const [PreferenceScores, setPreferenceScores] = useState({
    delivery: '',
    size: '',
    quality: '',
  });
  const { delivery, size, quality } = PreferenceScores;

  const onClickMain = (title) => {
    dispatch(mainChoose(title));
    setMain(title);
  };

  const onClickSub = (title) => {
    dispatch(subChoose());
    title.split('/').join('');
    setSub(title);
  };

  const resetMain = () => {
    dispatch(resetMainCategory());
  };
  const resetSub = (main) => {
    dispatch(resetSubCategory(main));
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setPreferenceScores({
      ...PreferenceScores,
      [name]: Number(onlyNumber),
    });
  };
  const handleSearch = () => {
    const headers = {
      Authorization: localStorage.getItem('token'),
    };
    console.log(delivery, size, quality, delivery + size + quality);
    if (Number(delivery + size + quality) !== 100) {
      alert('세 수의 합은 100이여야 합니다.');
      return;
    }
    getSearchResult(
      {
        mainCategory: main,
        subCategory: sub,
        deliveryPreference: delivery,
        sizePreference: size,
        qualityPreference: quality,
      },
      headers
    );
    setPreferenceScores({
      delivery: 0,
      size: 0,
      quality: 0,
    });

    navigate(`/search/result/${main}/${sub}/${delivery}/${size}/${quality}`);
  };

  return (
    <Search
      isMainCategoryChoose={isMainCategoryChoose}
      isSubCategoryChoose={isSubCategoryChoose}
      data={data}
      main={main}
      sub={sub}
      onClickMain={onClickMain}
      onClickSub={onClickSub}
      // for preference
      resetMain={resetMain}
      resetSub={resetSub}
      delivery={delivery}
      onChange={onChange}
      handleSearch={handleSearch}
      size={size}
      quality={quality}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.category.data.current,
    isMainCategoryChoose: state.category.status.isMainCategoryChoose,
    isSubCategoryChoose: state.category.status.isSubCategoryChoose,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchResult: (body, headers) => {
      return dispatch(getSearchResult(body, headers));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

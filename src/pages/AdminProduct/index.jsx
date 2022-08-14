// 함수들과 전해줄 것들
import React, { useState } from 'react';
import { postItemUrl } from '../../redux';
import { connect } from 'react-redux';
import AdminProduct from '../../components/adminProduct';

const AdminProductPage = ({ postItemUrl, error }) => {
  const [url, setUrl] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setUrl(value);
  };
  const add = () => {
    const headers = {
      Authorization: localStorage.getItem('token'),
    };
    postItemUrl(url, headers);

    if (error === 'redundant item') {
      alert('중복된 상품입니다. 다시 입력해주세요');
    } else alert('상품이 등록되었습니다.');
  };

  return <AdminProduct add={add} url={url} onChange={onChange} />;
};

const mapStateToProps = (state) => {
  return {
    error: state.category.status.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postItemUrl: (url, headers) => {
      return dispatch(postItemUrl(url, headers));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductPage);

import React, { useEffect } from 'react';
import { getWishListRequest } from '../../redux';
import { connect } from 'react-redux';
import My from '../../components/myPage/index';

const MyPage = ({ getWishListRequest, wishList }) => {
  console.log(wishList);
  useEffect(() => {
    const headers = {
      Authorization: localStorage.getItem('token'),
    };
    getWishListRequest(headers);
  }, [getWishListRequest]);

  return <My wishList={wishList} />;
};

const mapStateToProps = (state) => {
  return {
    like: state.category.status.like,
    data: state.category.data.current,
    wishList: state.myPage.status.wishList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWishListRequest: (headers) => {
      return dispatch(getWishListRequest(headers));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { checkSessionRequest } from '../../redux';
import Main from '../../components/main/index';
import { resetCategory } from '../../redux/category/actions';

const MainPage = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetCategory());
  }, [dispatch]);

  const onClick = () => {
    const headers = {
      Authorization: token,
    };
    checkSessionRequest(headers);
    navigate('/search');
  };
  return <Main isLoggedIn={isLoggedIn} onClick={onClick} token={token} />;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.kakaoAuth.status.isLoggedIn,
    data: state.category.data.current,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkSessionRequest: (headers) => {
      return dispatch(checkSessionRequest(headers));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

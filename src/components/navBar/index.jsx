import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { resetCategory } from '../../redux/category/actions';
import {
  NavbarContainer,
  NavbarWrap,
  Title,
  ButtonContainer,
  Button,
  AdminButton,
} from './styles';

const Navbar = (isLoggedIn) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = () => {
    navigate('/');
    dispatch(resetCategory());
  };

  const onClickAdmin = () => {
    navigate('/adminProduct');
  };
  const onClickMyPage = () => {
    navigate('/MyPage');
  };
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Title onClick={onClick}>유종의 ME</Title>
        {token || isLoggedIn === true ? (
          <ButtonContainer>
            <AdminButton onClick={onClickAdmin}>Add Products</AdminButton>
            &nbsp; | &nbsp;
            <Button onClick={onClickMyPage}> My Page </Button>
          </ButtonContainer>
        ) : (
          <></>
        )}
      </NavbarWrap>
    </NavbarContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.kakaoAuth.status.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

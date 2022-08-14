import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  background: black;
  color: #fff;
`;
export const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  width: 128px;
  height: 22px;
  font-size: 25px;
  position: fixed;
  left: 200px;
  top: 24px;
  background-size: 100% 100%;
  cursor: pointer;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  justify-content: flex-end;
  position: fixed;
  right: 100px;
`;
export const Button = styled.div`
  width: 100px;
  cursor: pointer;
  height: 36px;
  text-align: center;
`;
export const AdminButton = styled.div`
  width: 100px;
  font-size: 20px;
  cursor: pointer;
  height: 36px;
  text-align: center;
  margin-bottom: 15px;
`;

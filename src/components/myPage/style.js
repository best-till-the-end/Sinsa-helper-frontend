import styled, { keyframes } from 'styled-components';

const smoothAppear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
}
`;
export const Section = styled.section`
  background: black;
  height: 100%;
  display: block;
  border: None;
`;
export const MyPageContainer = styled.div`
  width: 90%;
  height: 100%;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  animation: ${smoothAppear} 1s;
`;
export const Header = styled.h1`
  font-weight: 400;
  margin-top: 50px;
  margin-left: 60px;
`;
export const WishList = styled.div`
  display: flex;
  margin-left: 30px;
  justify-content: space-between;
`;
export const Info = styled.div`
  flex: 3;
`;
export const WishProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const WishDetail = styled.div`
  flex: 2;
  display: flex;
`;
export const WishImage = styled.img`
  width: 200px;
  height: 30vh;
  object-fit: cover;
`;
export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const WishInfo = styled.span``;
export const ProductButton = styled.a`
  width: 100px;
  padding: 5px;
  margin: 5px 0px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;
export const WishPriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
`;
export const WishPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 5px;
`;
export const PriceChange = styled.h1``;
export const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

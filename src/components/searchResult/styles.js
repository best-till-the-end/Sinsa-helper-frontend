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
  border: None;
`;
export const Header = styled.h1`
  font-weight: 500;
  margin-left: 60px;
  margin-top: 50px;
`;
export const ResultContainer = styled.div`
  width: 90%;
  height: 90%;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  animation: ${smoothAppear} 1s;
`;
export const VerticleLine = styled.div`
  border-left: 2px solid lightgray;
  height: 50vh;
`;
export const FirstProduct = styled.div`
  padding: 35px 50px;
  display: flex;
`;
export const ImageContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 85%;
  height: 80vh;

  object-fit: fill;
`;
export const InfoContainter = styled.div`
  flex: 1;
  padding: 0 50px;
`;

export const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 100px;
`;
export const Desc = styled.p`
  margin: 20px 0px;
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LikeButton = styled.img`
  width: 40px;
  cursor: pointer;
  padding: 30px 0px;
  margin: 20px 0px;
`;
export const ProductButton = styled.a`
  padding: 15px;
  margin: 30px 0px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

export const OtherContainer = styled.div`
  display: flex;
  margin-left: 30px;
  justify-content: space-between;
`;

export const Info = styled.div`
  flex: 3;
`;
export const Summary = styled.div`
  flex: 1;
`;

export const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
export const ImageBox = styled.div`
  width: 200px;
  height: 30vh;
  overflow: hidden;
`;
export const OtherImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductName = styled.span``;
export const ProductScore = styled.span``;
export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    justify-content: flex-end;
  }
  img {
    width: 30px;
    cursor: pointer;
    objet-fit: cover;
  }
  a {
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    padding: 5px 5px;
    margin-top: 10px;
    margin-right: 10px;
    &:hover {
      background-color: #f8f4f4;
    }
  }
`;
export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-top: 20px;
`;

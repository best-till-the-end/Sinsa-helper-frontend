import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { clicklike } from '../../redux/category/actions';
import mainData from '../../redux/category/mainData';

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
const Section = styled.section`
  background: black;
  height: 100%;
  border: None;
`;
const Header = styled.h1`
  font-weight: 500;
  margin-left: 60px;
  margin-top: 50px;
`;
const ResultContainer = styled.div`
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
const VerticleLine = styled.div`
  border-left: 2px solid lightgray;
  height: 50vh;
`;
const FirstProduct = styled.div`
  padding: 35px 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 85%;
  height: 50vh;

  object-fit: cover;
`;
const InfoContainter = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LikeButton = styled.img`
  width: 40px;
  cursor: pointer;
  padding: 30px 0px;
  margin: 20px 0px;
`;
const ProductButton = styled.button`
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

const OtherContainer = styled.div`
  display: flex;
  margin-left: 30px;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const OtherImage = styled.img`
  width: 200px;
  height: 20vh;
  object-fit: cover;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductScore = styled.span``;
const PriceDetail = styled.div`
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
  }
  button {
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
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-top: 20px;
`;
const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
function SearchResult({ like, searchResult }) {
  useEffect(() => {
    console.log(searchResult);
  });
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  const CilckLikeButton = () => {
    setIsLiked(false);

    // dispatch(clicklike());
    // console.log(like.liked);
  };
  const ClickUnLikeButton = () => {
    setIsLiked(true);
  };
  const OtherProducts = (
    <Info>
      {mainData.map((product,index) => {
        return (
          <>
            <Product key={index}>
              <ProductDetail>
                <OtherImage src={product.imageUrl}></OtherImage>
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductScore>
                    <b>배송:</b> 30 점
                  </ProductScore>
                  <ProductScore>
                    <b>사이즈:</b> 40 점
                  </ProductScore>
                  <ProductScore>
                    <b>품질:</b> 50 점
                  </ProductScore>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice> 200,000 Won</ProductPrice>
                {isLiked ? (
                  <img
                    src={like.likeSrc}
                    onClick={CilckLikeButton}
                    alt="like"
                  ></img>
                ) : (
                  <div>
                    <img
                      src={like.NonLikeSrc}
                      onClick={ClickUnLikeButton}
                      alt="unlike"
                    ></img>
                    <button>상품 보러가기</button>
                  </div>
                )}
              </PriceDetail>
            </Product>
            <Hr />
          </>
        );
      })}
    </Info>
  );
  return (
    <Section>
      <ResultContainer>
        <Header>검색결과</Header>
        <FirstProduct>
          <ImageContainer>
            <Image src="https://image.msscdn.net/data/curating/23723/23723_1_250.jpg"></Image>
          </ImageContainer>
          <VerticleLine />
          <InfoContainter>
            <Title>Longsleeve 무지 긴팔티</Title>
            <Desc>배송</Desc>
            <Desc>사이즈</Desc>
            <Desc>품질</Desc>
            <Price>200,000 Won</Price>
            <ButtonContainer>
              <ProductButton>상품 보러가기</ProductButton>
              {isLiked ? (
                <LikeButton
                  src={like.likeSrc}
                  onClick={CilckLikeButton}
                ></LikeButton>
              ) : (
                <LikeButton
                  src={like.NonLikeSrc}
                  onClick={ClickUnLikeButton}
                ></LikeButton>
              )}
            </ButtonContainer>
          </InfoContainter>
        </FirstProduct>
        <Hr />
        <OtherContainer>
          {OtherProducts}
          <Summary>Summary</Summary>
        </OtherContainer>
      </ResultContainer>
    </Section>
  );
}
const mapStateToProps = (state) => {
  return {
    like: state.category.status.like,
    searchResult: state.category.status.searchResult,
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

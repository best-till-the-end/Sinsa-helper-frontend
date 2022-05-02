import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {
  handleDislikeWishItem,
  handleLikeWishItem,
  getSearchResult,
} from '../../redux';

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
const ProductButton = styled.a`
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

const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
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
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-top: 20px;
`;

function SearchResult({
  searchResult,
  like,
  handleDislikeWishItem,
  handleLikeWishItem,
  getSearchResult,
}) {
  useEffect(() => {
    const headers = {
      Authorization: localStorage.getItem('token'),
    };
    console.log(like.liked);
    console.log(searchResult);
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
  }, [like.liked, searchResult]);

  const { main, sub, delivery, size, quality } = useParams();

  const headers = {
    Authorization: localStorage.getItem('token'),
  };
  const ClickLikeButton = (item_id) => {
    handleDislikeWishItem(
      {
        mainCategory: main,
        subCategory: sub,
        deliveryPreference: delivery,
        sizePreference: size,
        qualityPreference: quality,
      },
      item_id,
      headers
    );
  };
  const ClickUnLikeButton = (item_id) => {
    console.log(item_id, headers);
    handleLikeWishItem(
      {
        mainCategory: main,
        subCategory: sub,
        deliveryPreference: delivery,
        sizePreference: size,
        qualityPreference: quality,
      },
      item_id,
      headers
    );
  };

  return (
    <Section>
      {searchResult && searchResult.length > 0 ? (
        <ResultContainer>
          <Header>검색결과</Header>
          <FirstProduct>
            <ImageContainer>
              <Image src={searchResult[0].photo}></Image>
            </ImageContainer>
            <VerticleLine />
            <InfoContainter>
              <Title>{searchResult[0].mainCategory}</Title>
              <Desc>
                <b>배송:</b> {searchResult[0].deliveryScore}
              </Desc>
              <Desc>
                <b>사이즈:</b> {searchResult[0].sizeScore}
              </Desc>
              <Desc>
                <b>품질:</b> {searchResult[0].qualityScore}
              </Desc>
              <Price>{searchResult[0].priceToday}</Price>
              <ButtonContainer>
                <ProductButton href={searchResult[0].itemUrl}>
                  상품 보러가기
                </ProductButton>
                {searchResult[0].like ? (
                  <LikeButton
                    src={like.likeSrc}
                    onClick={() => ClickLikeButton(searchResult[0].itemId)}
                  ></LikeButton>
                ) : (
                  <LikeButton
                    src={like.NonLikeSrc}
                    onClick={() => ClickUnLikeButton(searchResult[0].itemId)}
                  ></LikeButton>
                )}
              </ButtonContainer>
            </InfoContainter>
          </FirstProduct>
          <Hr />
          <OtherContainer>
            {searchResult
              .slice(1, searchResult.length)
              .map((product, index) => (
                <Info>
                  <Product key={index}>
                    <ProductDetail>
                      <OtherImage src={product.photo}></OtherImage>
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductScore>
                          <b>배송:</b> {product.deliveryScore}
                        </ProductScore>
                        <ProductScore>
                          <b>사이즈:</b> {product.sizeScore}
                        </ProductScore>
                        <ProductScore>
                          <b>품질:</b> {product.qualityScore}
                        </ProductScore>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductPrice> {product.priceToday}</ProductPrice>
                      {product.like ? (
                        <img
                          src={like.likeSrc}
                          onClick={() => ClickLikeButton(product.itemId)}
                          alt="like"
                        ></img>
                      ) : (
                        <div>
                          <img
                            src={like.NonLikeSrc}
                            onClick={() => ClickUnLikeButton(product.itemId)}
                            alt="unlike"
                          ></img>
                        </div>
                      )}
                      <a href={product.itemUrl}>상품 보러가기</a>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </Info>
              ))}
            <Summary>Summary</Summary>
          </OtherContainer>
        </ResultContainer>
      ) : (
        <div></div>
      )}
    </Section>
  );
}
const mapStateToProps = (state) => {
  return {
    searchResult: state.category.status.searchResult,
    loading: state.category.status.loading,
    like: state.category.status.like,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDislikeWishItem: (body, item_id, headers) => {
      return dispatch(handleDislikeWishItem(body, item_id, headers));
    },
    getSearchResult: (body, headers) => {
      return dispatch(getSearchResult(body, headers));
    },
    handleLikeWishItem: (body, item_id, headers) => {
      return dispatch(handleLikeWishItem(body, item_id, headers));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

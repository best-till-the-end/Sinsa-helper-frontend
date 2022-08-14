import React from 'react';
import {
  Section,
  MyPageContainer,
  Header,
  Hr,
  WishList,
  Info,
  WishProduct,
  WishDetail,
  WishImage,
  Details,
  WishInfo,
  ProductButton,
  WishPriceDetail,
  WishPrice,
  PriceChange,
} from './style';

const My = ({ wishList }) => {
  return (
    <Section>
      {Array.isArray(wishList) && wishList.length === 0 ? (
        <div style={{ background: 'white' }}>찜한 상품이 없습니다.</div>
      ) : (
        <MyPageContainer>
          <Header>찜한 목록</Header>
          <Hr />
          <WishList>
            <Info>
              {wishList.map((product) => (
                <>
                  <WishProduct>
                    <WishDetail>
                      <WishImage src={product.photo}></WishImage>
                      <Details>
                        <WishInfo>
                          <b>상품명:</b> {product.itemName}
                        </WishInfo>
                        <WishInfo>
                          <b>배송:</b> 30 점
                        </WishInfo>
                        <WishInfo>
                          <b>사이즈:</b> 40 점
                        </WishInfo>
                        <WishInfo>
                          <b>품질:</b> 50 점
                        </WishInfo>
                        <ProductButton href={product.itemUrl}>
                          제품 보러가기
                        </ProductButton>
                      </Details>
                    </WishDetail>
                    <WishPriceDetail>
                      <WishPrice>어제가격: {product.priceToday}</WishPrice>
                      <WishPrice>오늘가격: {product.priceYesterday}</WishPrice>
                      <PriceChange>
                        어제 가격의{' '}
                        {((product.priceToday - product.priceYesterday) /
                          product.priceYesterday) *
                          100}
                        % 입니다.
                      </PriceChange>
                    </WishPriceDetail>
                  </WishProduct>
                  <Hr />
                </>
              ))}
            </Info>
          </WishList>
        </MyPageContainer>
      )}
    </Section>
  );
};

export default My;

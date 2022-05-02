import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import mainData from '../redux/category/mainData';

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
  height: 100vh;
  display: block;
  border: None;
`;
const MyPageContainer = styled.div`
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
const Header = styled.h1`
  font-weight: 400;
  margin-top: 50px;
  margin-left: 60px;
`;
const WishList = styled.div`
  display: flex;
  margin-left: 30px;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const WishProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;
const WishDetail = styled.div`
  flex: 2;
  display: flex;
`;
const WishImage = styled.img`
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
const WishInfo = styled.span``;
const ProductButton = styled.button`
  padding: 5px;
  margin: 5px 0px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const WishPriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
`;
const WishPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 5px;
`;
const PriceChange = styled.h1``;
const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
function MyPage() {
  return (
    <Section>
      <MyPageContainer>
        <Header>찜한 목록</Header>
        <Hr />
        <WishList>
          <Info>
            {mainData.map((product) => (
              <>
                <WishProduct>
                  <WishDetail>
                    <WishImage src={product.imageUrl}></WishImage>
                    <Details>
                      <WishInfo>
                        <b>상품명:</b> {product.title}
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
                      <ProductButton>제품 보러가기</ProductButton>
                    </Details>
                  </WishDetail>
                  <WishPriceDetail>
                    <WishPrice>어제가격: 10000</WishPrice>
                    <WishPrice>오늘가격: 10000</WishPrice>
                    <PriceChange>가격이 10%올랐습니다.</PriceChange>
                  </WishPriceDetail>
                </WishProduct>
                <Hr />
              </>
            ))}
          </Info>
        </WishList>
      </MyPageContainer>
    </Section>
  );
}
const mapStateToProps = (state) => {
  return {
    like: state.category.status.like,
    data: state.category.data.current,
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
